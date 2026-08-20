-- Migration: 002_add_work_location.sql
-- Description: Add work_location column to bookings table

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS work_location VARCHAR(255);
