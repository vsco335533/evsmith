import { neon } from '@neondatabase/serverless';

function getSql() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error('DATABASE_URL environment variable is not defined');
  }
  return neon(dbUrl);
}

let dbInitialized = false;

export async function initDb() {
  if (dbInitialized) return;
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(100) NOT NULL,
      plan VARCHAR(100) NOT NULL,
      preferred_ev_type VARCHAR(255),
      doc_type VARCHAR(100),
      pickup_date VARCHAR(100),
      work_location VARCHAR(255),
      address TEXT,
      delivery_service VARCHAR(255),
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  dbInitialized = true;
}

export interface BookingPayload {
  name: string;
  phone: string;
  plan: string;
  preferredEvType?: string;
  docType?: string;
  pickupDate?: string;
  workLocation?: string;
  address?: string;
  deliveryService?: string;
}

export async function createBooking(data: BookingPayload) {
  await initDb();
  const sql = getSql();
  const result = await sql`
    INSERT INTO bookings (name, phone, plan, preferred_ev_type, doc_type, pickup_date, work_location, address, delivery_service)
    VALUES (
      ${data.name},
      ${data.phone},
      ${data.plan},
      ${data.preferredEvType || 'Swappable Vehicle'},
      ${data.docType || 'Aadhaar'},
      ${data.pickupDate || 'Today'},
      ${data.workLocation || ''},
      ${data.address || ''},
      ${data.deliveryService || ''}
    )
    RETURNING *;
  `;
  return result[0];
}

export async function getBookings() {
  await initDb();
  const sql = getSql();
  const rows = await sql`
    SELECT * FROM bookings ORDER BY created_at DESC;
  `;
  return rows;
}
