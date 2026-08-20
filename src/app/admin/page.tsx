'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Users, 
  Calendar, 
  Search, 
  RefreshCw, 
  CheckCircle2, 
  Zap, 
  Phone, 
  FileText, 
  ArrowLeft,
  Clock,
  MapPin,
  Briefcase,
  Home
} from 'lucide-react';
import Link from 'next/link';

interface Booking {
  id: number;
  name: string;
  phone: string;
  plan: string;
  preferred_ev_type: string;
  doc_type: string;
  pickup_date: string;
  work_location?: string;
  address?: string;
  delivery_service?: string;
  status: string;
  created_at: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const fetchBookings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings || []);
      } else {
        setError(data.error || 'Failed to fetch bookings');
      }
    } catch (err) {
      setError('Network error while fetching bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.phone.includes(search) ||
    b.plan.toLowerCase().includes(search.toLowerCase()) ||
    (b.work_location && b.work_location.toLowerCase().includes(search.toLowerCase())) ||
    (b.delivery_service && b.delivery_service.toLowerCase().includes(search.toLowerCase())) ||
    (b.address && b.address.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#081426] text-white p-4 sm:p-8 font-sans">
      {/* Background radial highlight */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#38d430]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-[#38d430]/30 shadow-2xl">
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="p-3 rounded-2xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Return to Home"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-[#38d430]/20 text-[#38d430]">
                  <Database className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold text-[#38d430] uppercase tracking-wider">
                  Neon PostgreSQL Admin
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
                Rental Reservations Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={fetchBookings}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 transition-colors w-full sm:w-auto"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Reservations</span>
              <p className="text-3xl font-black text-white font-heading mt-1">{bookings.length}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#38d430]/20 text-[#38d430]">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Latest Request</span>
              <p className="text-base font-bold text-white font-heading mt-1">
                {bookings.length > 0 ? bookings[0].name : 'No requests yet'}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#00f0ff]/20 text-[#00f0ff]">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">DB Connection Status</span>
              <p className="text-sm font-bold text-[#38d430] font-mono mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38d430] animate-ping" /> Connected (Neon)
              </p>
            </div>
            <div className="p-3 rounded-xl bg-[#38d430]/20 text-[#38d430]">
              <Zap className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by customer name, phone, delivery service, address, location, or package..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-white placeholder-slate-500"
          />
        </div>

        {/* Bookings Table */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          {loading ? (
            <div className="p-12 text-center text-slate-400 flex flex-col items-center gap-3">
              <RefreshCw className="w-8 h-8 animate-spin text-[#38d430]" />
              <p className="text-sm font-medium">Fetching reservations from Neon PostgreSQL database...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center text-red-400 font-medium">
              {error}
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              <p className="text-base font-bold text-slate-300">No reservations found.</p>
              <p className="text-xs mt-1 text-slate-500">Bookings submitted on the website will appear here in real-time.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Customer</th>
                    <th className="py-4 px-6">Phone / WhatsApp</th>
                    <th className="py-4 px-6">Delivery Service</th>
                    <th className="py-4 px-6">Work Location</th>
                    <th className="py-4 px-6">Home Address</th>
                    <th className="py-4 px-6">Package</th>
                    <th className="py-4 px-6">EV Preference</th>
                    <th className="py-4 px-6">ID Proof</th>
                    <th className="py-4 px-6">Pickup Date</th>
                    <th className="py-4 px-6">Submitted At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6 font-mono text-slate-400 font-bold">#{b.id}</td>
                      <td className="py-4 px-6 font-bold text-white">{b.name}</td>
                      <td className="py-4 px-6 text-slate-300">
                        <a 
                          href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#38d430] flex items-center gap-1.5 font-mono"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          {b.phone}
                        </a>
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-200 font-medium">
                        {b.delivery_service ? (
                          <span className="flex items-center gap-1 text-[#00f0ff]">
                            <Briefcase className="w-3.5 h-3.5 shrink-0" />
                            {b.delivery_service}
                          </span>
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-200 font-medium">
                        {b.work_location ? (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#38d430] shrink-0" />
                            {b.work_location}
                          </span>
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300 font-medium max-w-xs truncate">
                        {b.address ? (
                          <span className="flex items-center gap-1">
                            <Home className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            {b.address}
                          </span>
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-[#38d430]/20 text-[#38d430] uppercase">
                          {b.plan}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300 font-medium">
                        {b.preferred_ev_type || 'Swappable Vehicle'}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300 font-medium">
                        {b.doc_type || 'Aadhaar'}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300 font-mono">
                        {b.pickup_date || 'Today'}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-400 font-mono">
                        {new Date(b.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
