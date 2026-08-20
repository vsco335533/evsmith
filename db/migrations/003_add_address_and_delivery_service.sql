-- Migration: 003_add_address_and_delivery_service.sql
-- Description: Add address and delivery_service columns to bookings table

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS delivery_service VARCHAR(255);
