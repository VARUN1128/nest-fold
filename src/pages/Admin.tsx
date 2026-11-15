import React, { useState, useEffect, useMemo } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { 
  Lock, 
  Search, 
  Download, 
  RefreshCw, 
  Users, 
  MapPin, 
  Calendar, 
  Share2, 
  Copy, 
  Check, 
  AlertCircle, 
  Database,
  ArrowUpDown,
  LogOut
} from 'lucide-react';

interface WaitlistEntry {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  place: string;
  product_interested: string;
  how_did_you_find_us?: string | null;
  created_at: string;
}

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('nf_admin_authenticated') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('ALL');
  const [selectedSource, setSelectedSource] = useState('ALL');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Default passcode fallback if environment variable is not defined
  const expectedPasscode = import.meta.env.VITE_ADMIN_PASSCODE || 'nestfold2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === expectedPasscode) {
      setIsAuthenticated(true);
      sessionStorage.setItem('nf_admin_authenticated', 'true');
      setPasscodeError('');
    } else {
      setPasscodeError('Invalid administrative passcode. Please verify your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('nf_admin_authenticated');
    setEntries([]);
  };

  const fetchRegistrations = async () => {
    if (!isSupabaseConfigured() || !supabase) {
      setFetchError('Supabase is not configured yet. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are present in your Vercel Environment Variables.');
      return;
    }

    setLoading(true);
    setFetchError(null);

    try {
      const { data, error } = await supabase
        .from('early_access_registrations')
        .select('*')
        .order('created_at', { ascending: sortOrder === 'asc' });

      if (error) {
        throw error;
      }

      setEntries((data as WaitlistEntry[]) || []);
    } catch (err: any) {
      console.error('Error fetching waitlist records from Supabase:', err);
      setFetchError(
        err?.message || 'Failed to retrieve records. Ensure the Supabase table exists and RLS allows SELECT.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchRegistrations();
    }
  }, [isAuthenticated, sortOrder]);

  // Derived filter options
  const uniqueCities = useMemo(() => {
    const cities = entries.map((e) => e.place.trim()).filter(Boolean);
    return Array.from(new Set(cities)).sort();
  }, [entries]);

  const uniqueSources = useMemo(() => {
    const sources = entries
      .map((e) => e.how_did_you_find_us?.trim())
      .filter((s): s is string => Boolean(s));
    return Array.from(new Set(sources)).sort();
  }, [entries]);

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return entries.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.product_interested.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.how_did_you_find_us &&
          item.how_did_you_find_us.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCity = selectedCity === 'ALL' || item.place.toLowerCase() === selectedCity.toLowerCase();
      const matchesSource =
        selectedSource === 'ALL' ||
        (selectedSource === 'Unspecified'
          ? !item.how_did_you_find_us
          : item.how_did_you_find_us?.toLowerCase() === selectedSource.toLowerCase());

      return matchesSearch && matchesCity && matchesSource;
    });
  }, [entries, searchQuery, selectedCity, selectedSource]);

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // CSV Export
  const exportToCSV = () => {
    if (entries.length === 0) return;

    const headers = [
      'Queue Position',
      'Reference ID',
      'Full Name',
      'Email',
      'Phone',
      'City / Town',
      'Space Challenge / Product Interest',
      'Discovery Source',
      'Registration Date (UTC)',
    ];

    const rows = entries.map((entry, index) => [
      `#${index + 1}`,
      `NF-${entry.id.substring(0, 8).toUpperCase()}`,
      `"${entry.full_name.replace(/"/g, '""')}"`,
      `"${entry.email.replace(/"/g, '""')}"`,
      `"${entry.phone.replace(/"/g, '""')}"`,
      `"${entry.place.replace(/"/g, '""')}"`,
      `"${entry.product_interested.replace(/"/g, '""')}"`,
      `"${(entry.how_did_you_find_us || 'Not specified').replace(/"/g, '""')}"`,
      `"${entry.created_at}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    const dateStr = new Date().toISOString().split('T')[0];
    link.setAttribute('download', `nest_and_fold_waitlist_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  // PASSCODE GATE SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F7F0E3] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-[#FAF7F0] border border-[#1A1208]/15 p-8 sm:p-10 rounded-sm shadow-xl">
          <div className="w-12 h-12 bg-[#1A1208] text-[#C8A96E] rounded-full flex items-center justify-center mb-6">
            <Lock className="w-6 h-6" />
          </div>

          <span className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-[#D4541A] block mb-2">
            Nest &amp; Fold Internal
          </span>

          <h2 className="font-serif text-3xl text-[#1A1208] font-light">
            Atelier Portal
          </h2>

          <p className="font-sans text-xs text-[#1A1208]/70 mt-2 leading-relaxed">
            Please enter your administrative passcode to access the live Season 01 drop registrations.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="passcode"
                className="block text-xs uppercase tracking-[0.18em] font-medium text-[#1A1208] mb-1.5"
              >
                Passcode
              </label>
              <input
                id="passcode"
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter admin passcode"
                className="w-full px-4 py-3 bg-[#F7F0E3] text-[#1A1208] text-sm border border-[#1A1208]/20 rounded-sm outline-none focus:bg-white focus:border-[#D4541A] transition-colors"
                autoFocus
              />
              {passcodeError && (
                <p className="mt-2 text-xs text-red-700 font-sans">{passcodeError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D4541A] hover:bg-[#BA4512] text-[#F7F0E3] text-xs font-medium uppercase tracking-[0.2em] rounded-sm transition-all shadow-md active:translate-y-0"
            >
              Authenticate
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-[#1A1208]/50 italic">
            Default passcode: <code className="font-mono text-[#1A1208]">nestfold2026</code> (configurable via VITE_ADMIN_PASSCODE)
          </p>
        </div>
      </div>
    );
  }

  // MAIN DASHBOARD SCREEN
  return (
    <div className="min-h-screen bg-[#F7F0E3] text-[#1A1208] pt-28 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1A1208]/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#C8A96E] font-medium">
                Administrative Atelier
              </span>
              <span className="text-[#1A1208]/30">·</span>
              <span className="flex items-center gap-1.5 text-[11px] text-[#7A9E7E] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A9E7E] animate-pulse"></span>
                Live Supabase Connected
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1208] font-light">
              Waitlist Registry
            </h1>
            <p className="font-sans text-xs sm:text-sm text-[#1A1208]/70 mt-1">
              Real-time early access registrations for Season 01: The Compressed City.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchRegistrations}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF7F0] border border-[#1A1208]/15 hover:border-[#1A1208]/40 text-[#1A1208] text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#D4541A]' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={entries.length === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF7F0] border border-[#1A1208]/15 hover:border-[#1A1208]/40 text-[#1A1208] text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-[#C8A96E]" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-[#1A1208]/60 hover:text-red-700 text-xs font-medium uppercase tracking-[0.15em] transition-colors"
              title="Lock Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Database / RLS Error Warning */}
        {fetchError && (
          <div className="p-5 bg-red-50 border border-red-200 text-red-900 rounded-sm space-y-2">
            <div className="flex items-center gap-2 font-medium text-xs">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Database Query Notice</span>
            </div>
            <p className="text-xs text-red-800 leading-relaxed">{fetchError}</p>
            <p className="text-[11px] text-red-700/80 leading-relaxed font-mono">
              Ensure you have run the migration in Supabase SQL editor: <br />
              <code>GRANT SELECT ON public.early_access_registrations TO anon;</code>
            </p>
          </div>
        )}

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm">
            <div className="flex justify-between items-center text-[#1A1208]/60 mb-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
                Total Registrations
              </span>
              <Users className="w-4 h-4 text-[#D4541A]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl text-[#1A1208] font-light">
              {entries.length}
            </div>
            <span className="text-[10px] text-[#7A9E7E] mt-1 block font-medium">
              Real entries in Supabase
            </span>
          </div>

          <div className="bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm">
            <div className="flex justify-between items-center text-[#1A1208]/60 mb-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
                Unique Cities
              </span>
              <MapPin className="w-4 h-4 text-[#C8A96E]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl text-[#1A1208] font-light">
              {uniqueCities.length}
            </div>
            <span className="text-[10px] text-[#1A1208]/60 mt-1 block">
              Pan-India urban reach
            </span>
          </div>

          <div className="bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm">
            <div className="flex justify-between items-center text-[#1A1208]/60 mb-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
                Top Channel
              </span>
              <Share2 className="w-4 h-4 text-[#7A9E7E]" />
            </div>
            <div className="font-serif text-2xl text-[#1A1208] font-light truncate">
              {uniqueSources[0] || 'Direct / Organic'}
            </div>
            <span className="text-[10px] text-[#1A1208]/60 mt-1 block">
              Leading discovery driver
            </span>
          </div>

          <div className="bg-[#FAF7F0] p-6 border border-[#1A1208]/10 rounded-sm">
            <div className="flex justify-between items-center text-[#1A1208]/60 mb-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium">
                Latest Sign-Up
              </span>
              <Calendar className="w-4 h-4 text-[#1A1208]/50" />
            </div>
            <div className="font-sans text-xs text-[#1A1208] font-medium truncate mt-2">
              {entries.length > 0 ? formatDate(entries[0].created_at) : 'No signups yet'}
            </div>
            <span className="text-[10px] text-[#1A1208]/60 mt-1 block">
              Updated live
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#FAF7F0] p-4 sm:p-5 border border-[#1A1208]/10 rounded-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1208]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, city, or space challenge..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#F7F0E3] text-[#1A1208] text-xs border border-[#1A1208]/15 rounded-sm outline-none focus:bg-white focus:border-[#D4541A] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#1A1208]/60 uppercase tracking-wider font-medium">City:</span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-2 bg-[#F7F0E3] text-[#1A1208] text-xs border border-[#1A1208]/15 rounded-sm outline-none focus:border-[#D4541A]"
              >
                <option value="ALL">All Cities ({uniqueCities.length})</option>
                {uniqueCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#1A1208]/60 uppercase tracking-wider font-medium">Source:</span>
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="px-3 py-2 bg-[#F7F0E3] text-[#1A1208] text-xs border border-[#1A1208]/15 rounded-sm outline-none focus:border-[#D4541A]"
              >
                <option value="ALL">All Channels</option>
                {uniqueSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F7F0E3] border border-[#1A1208]/15 hover:border-[#1A1208]/40 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors"
              title="Toggle Sort Order"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#C8A96E]" />
              <span>{sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}</span>
            </button>
          </div>
        </div>

        {/* Records Table */}
        <div className="bg-[#FAF7F0] border border-[#1A1208]/10 rounded-sm overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#1A1208] text-[#F7F0E3] uppercase tracking-[0.16em] text-[10px]">
                <tr>
                  <th className="py-4 px-4 sm:px-6 font-medium">Queue</th>
                  <th className="py-4 px-4 sm:px-6 font-medium">Applicant Details</th>
                  <th className="py-4 px-4 sm:px-6 font-medium">City</th>
                  <th className="py-4 px-4 sm:px-6 font-medium">Space Challenge / Product</th>
                  <th className="py-4 px-4 sm:px-6 font-medium">Source</th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1208]/10">
                {loading && entries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-[#1A1208]/60">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#D4541A] mb-3" />
                      <span>Loading real records from Supabase...</span>
                    </td>
                  </tr>
                ) : filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-16 text-center text-[#1A1208]/60">
                      <Database className="w-8 h-8 mx-auto text-[#C8A96E]/60 mb-3" />
                      <p className="font-serif text-xl text-[#1A1208] font-light">
                        {entries.length === 0 ? 'No waitlist registrations found in Supabase' : 'No matching entries'}
                      </p>
                      <p className="text-xs text-[#1A1208]/60 mt-1 max-w-sm mx-auto">
                        {entries.length === 0
                          ? 'When customers register at /early-access, their details will appear here live in real-time.'
                          : 'Try clearing your search query or city filters.'}
                      </p>
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((item, index) => {
                    const refId = `NF-${item.id.substring(0, 8).toUpperCase()}`;

                    return (
                      <tr key={item.id} className="hover:bg-[#F7F0E3]/70 transition-colors">
                        {/* Queue Position */}
                        <td className="py-4 px-4 sm:px-6 align-top">
                          <span className="font-mono font-semibold text-[#D4541A]">
                            #{index + 1}
                          </span>
                          <span className="block font-mono text-[10px] text-[#1A1208]/40 mt-0.5">
                            {refId}
                          </span>
                        </td>

                        {/* Name & Contact Info */}
                        <td className="py-4 px-4 sm:px-6 align-top">
                          <div className="font-medium text-[#1A1208] text-sm">
                            {item.full_name}
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-[11px] text-[#1A1208]/75">
                            <span className="font-mono">{item.email}</span>
                            <button
                              onClick={() => handleCopy(item.email, `email-${item.id}`)}
                              className="text-[#1A1208]/40 hover:text-[#D4541A] transition-colors"
                              title="Copy email"
                            >
                              {copiedId === `email-${item.id}` ? (
                                <Check className="w-3 h-3 text-green-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#1A1208]/60 font-mono">
                            <span>{item.phone}</span>
                            <button
                              onClick={() => handleCopy(item.phone, `phone-${item.id}`)}
                              className="text-[#1A1208]/40 hover:text-[#D4541A] transition-colors"
                              title="Copy phone"
                            >
                              {copiedId === `phone-${item.id}` ? (
                                <Check className="w-3 h-3 text-green-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* City / Location */}
                        <td className="py-4 px-4 sm:px-6 align-top">
                          <span className="inline-flex items-center px-2.5 py-1 bg-[#1A1208]/5 text-[#1A1208] rounded-sm text-[11px] font-medium">
                            <MapPin className="w-3 h-3 mr-1 text-[#C8A96E]" />
                            {item.place}
                          </span>
                        </td>

                        {/* Space Challenge / Product Interest */}
                        <td className="py-4 px-4 sm:px-6 align-top max-w-xs">
                          <p className="font-serif italic text-sm text-[#1A1208] leading-snug">
                            "{item.product_interested}"
                          </p>
                        </td>

                        {/* Discovery Source */}
                        <td className="py-4 px-4 sm:px-6 align-top">
                          {item.how_did_you_find_us ? (
                            <span className="inline-block px-2 py-0.5 bg-[#C8A96E]/15 text-[#1A1208] rounded-sm text-[10px] font-medium tracking-wide">
                              {item.how_did_you_find_us}
                            </span>
                          ) : (
                            <span className="text-[10px] text-[#1A1208]/40 italic">
                              Direct / Organic
                            </span>
                          )}
                        </td>

                        {/* Date & Time */}
                        <td className="py-4 px-4 sm:px-6 align-top text-right whitespace-nowrap text-[11px] text-[#1A1208]/60 font-mono">
                          {formatDate(item.created_at)}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-[#F7F0E3]/50 border-t border-[#1A1208]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#1A1208]/60">
            <span>
              Showing {filteredEntries.length} of {entries.length} total registrations
            </span>
            <span className="text-[#C8A96E] font-medium">
              Nest &amp; Fold Season 01 Drop Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
