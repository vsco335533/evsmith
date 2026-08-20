import { NextResponse } from 'next/server';
import { createBooking, getBookings } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, plan, preferredEvType, docType, pickupDate, workLocation, address, deliveryService } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const booking = await createBooking({
      name,
      phone,
      plan: plan || 'monthly',
      preferredEvType,
      docType,
      pickupDate,
      workLocation,
      address,
      deliveryService,
    });

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error('Database insertion error:', error);
    return NextResponse.json(
      { error: 'Failed to save booking details to database.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await getBookings();
    return NextResponse.json({ success: true, count: bookings.length, bookings });
  } catch (error) {
    console.error('Database retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve bookings from database.' },
      { status: 500 }
    );
  }
}
