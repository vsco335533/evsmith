-- Migration: 001_create_bookings_table.sql
-- Description: Create bookings table and indexes for EVSmith rental reservations

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  plan VARCHAR(100) NOT NULL,
  preferred_ev_type VARCHAR(255) DEFAULT 'Swappable Vehicle',
  doc_type VARCHAR(100) DEFAULT 'Aadhaar',
  pickup_date VARCHAR(100) DEFAULT 'Today',
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_phone ON bookings(phone);
