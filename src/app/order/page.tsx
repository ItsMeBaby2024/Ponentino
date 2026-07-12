"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, CheckCircle, Clock, MapPin, Bell, Coffee, Wine } from 'lucide-react';

interface Order {
  id: string;
  table: string;
  drinkName: string;
  category: 'cocktail' | 'mocktail';
  price: string;
  mbti: string;
  hktTimestamp: string;
  isoTimestamp: string;
}

const TABLE_COORDS: Record<string, { x: number; y: number; isRound: boolean }> = {
  '12': { x: 7.67, y: 5.45, isRound: true },
  '11': { x: 4.14, y: 22.43, isRound: true },
  '10': { x: 3.17, y: 31.50, isRound: true },
  '15': { x: 25.05, y: 33.03, isRound: false },
  '18': { x: 50.23, y: 36.52, isRound: true },
  '19': { x: 78.58, y: 39.46, isRound: false },
  '20': { x: 91.04, y: 45.47, isRound: true },
  '1': { x: 5.70, y: 80.64, isRound: false },
  '2': { x: 10.57, y: 88.79, isRound: true },
  '3': { x: 3.54, y: 91.36, isRound: true }
};

export default function OrderDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [completingId, setCompletingId] = useState<string | null>(null);

  // Fetch active orders from API
  const fetchOrders = useCallback(async (showLoading = false) => {
    if (showLoading) setLoading(true);
    try {
      const response = await fetch('/api/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        
        // Default to select the first order if none is selected
        if (data.length > 0 && !selectedOrderId) {
          setSelectedOrderId(data[0].id);
        }
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      if (showLoading) setLoading(false);
    }
  }, [selectedOrderId]);

  useEffect(() => {
    fetchOrders(true);
  }, [fetchOrders]);

  // Polling mechanism (every 3 seconds)
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      fetchOrders(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchOrders]);

  // Complete an order
  const handleCompleteOrder = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent selection trigger
    setCompletingId(id);
    try {
      const response = await fetch(`/api/orders?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Clear selection if completing the selected order
        if (selectedOrderId === id) {
          const remaining = orders.filter(o => o.id !== id);
          setSelectedOrderId(remaining.length > 0 ? remaining[0].id : null);
        }
        setOrders(prev => prev.filter(o => o.id !== id));
      }
    } catch (err) {
      console.error('Error completing order:', err);
    } finally {
      setCompletingId(null);
    }
  };

  // Find the selected order's table details
  const selectedOrder = orders.find(o => o.id === selectedOrderId);
  const highlightedTable = selectedOrder ? TABLE_COORDS[selectedOrder.table] : null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-amber-950 p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Navigation / Branding Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 border-2 border-amber-900/10 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-950 text-amber-100 rounded-xl flex items-center justify-center shadow-inner">
              <Wine className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-black text-red-950 tracking-wide">
                Ponentino Bar & Bistro
              </h1>
              <p className="text-xs text-amber-900/50 uppercase tracking-widest font-bold">
                Drink Order Dispatch Dashboard (HKT)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Auto Refresh Toggle */}
            <label className="flex items-center gap-2 text-xs font-bold text-amber-900/70 select-none cursor-pointer bg-amber-50/50 border border-amber-900/10 px-3 py-1.5 rounded-full hover:bg-amber-100/50 transition-colors">
              <input 
                type="checkbox" 
                checked={autoRefresh} 
                onChange={(e) => setAutoRefresh(e.target.checked)} 
                className="rounded text-amber-800 focus:ring-amber-800 border-amber-300 accent-amber-800"
              />
              <span className="flex items-center gap-1">
                <RefreshCw className={`w-3.5 h-3.5 ${autoRefresh ? 'animate-spin' : ''}`} />
                {autoRefresh ? 'Live Poll Active' : 'Polling Paused'}
              </span>
            </label>

            <button
              onClick={() => fetchOrders(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-800 text-white font-bold text-xs rounded-full hover:bg-amber-900 transition-colors active:scale-95 shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
          </div>
        </header>

        {/* Dashboard Grid split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Orders List Queue (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="flex justify-between items-center bg-white border border-amber-900/10 px-5 py-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-800 animate-bounce" />
                <h2 className="font-serif text-lg font-bold text-red-950">Active Incoming Orders</h2>
              </div>
              <span className="bg-red-100 text-red-800 font-mono font-bold text-xs px-2.5 py-1 rounded-full border border-red-200">
                {orders.length} Queue
              </span>
            </div>

            {loading ? (
              <div className="bg-white border-2 border-amber-900/10 rounded-2xl h-96 flex flex-col items-center justify-center gap-3">
                <RefreshCw className="w-8 h-8 text-amber-800 animate-spin" />
                <span className="text-sm font-semibold text-amber-900/60">Fetching orders...</span>
              </div>
            ) : orders.length === 0 ? (
              <div className="bg-white border-2 border-amber-900/10 rounded-2xl h-96 flex flex-col items-center justify-center gap-3 text-center px-4">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200 shadow-inner text-amber-800 mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-red-950">All Clear!</h3>
                <p className="text-xs text-amber-900/60 max-w-xs">
                  There are no pending drink orders at the moment. New orders placed by guests will appear here in real-time.
                </p>
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-1">
                {orders.map((order) => {
                  const isSelected = selectedOrderId === order.id;
                  const isCocktail = order.category === 'cocktail';
                  
                  return (
                    <div
                      key={order.id}
                      onClick={() => setSelectedOrderId(order.id)}
                      className={`relative border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer flex gap-4 items-center group shadow-sm hover:shadow ${
                        isSelected
                          ? 'bg-amber-100/30 border-amber-700/80 ring-1 ring-amber-700/50'
                          : 'bg-white border-amber-900/10 hover:border-amber-900/20'
                      }`}
                    >
                      {/* Left: Table Number Circle Badge */}
                      <div className={`w-14 h-14 shrink-0 rounded-xl flex flex-col items-center justify-center border transition-all ${
                        isSelected 
                          ? 'bg-amber-800 text-white border-amber-900 shadow-md' 
                          : 'bg-amber-50 text-amber-900 border-amber-900/15 group-hover:bg-amber-100/50'
                      }`}>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60 leading-none">Table</span>
                        <span className="text-xl font-serif font-black leading-tight">{order.table}</span>
                      </div>

                      {/* Middle: Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-serif text-base font-bold text-red-950 truncate max-w-[180px] sm:max-w-xs" title={order.drinkName}>
                            {order.drinkName}
                          </h3>
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            isCocktail 
                              ? 'bg-red-50 text-red-800 border-red-200/60' 
                              : 'bg-emerald-50 text-emerald-800 border-emerald-200/60'
                          }`}>
                            {isCocktail ? 'Cocktail' : 'Mocktail'}
                          </span>
                          <span className="text-[10px] font-mono font-black text-amber-800">
                            {order.price}
                          </span>
                        </div>

                        {/* Order info details */}
                        <div className="flex items-center gap-x-3 gap-y-1 mt-1 text-xs text-amber-900/50 font-medium flex-wrap font-sans">
                          <span className="flex items-center gap-1 shrink-0">
                            <Clock className="w-3.5 h-3.5 text-amber-800/60" />
                            <span className="font-mono text-amber-900/80">{order.hktTimestamp} HKT</span>
                          </span>
                          <span className="shrink-0 bg-amber-100/50 text-amber-800/80 text-[10px] font-bold font-mono px-2 py-0.5 rounded">
                            MBTI: {order.mbti}
                          </span>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="shrink-0">
                        <button
                          onClick={(e) => handleCompleteOrder(order.id, e)}
                          disabled={completingId === order.id}
                          className="px-4 py-2 sm:px-5 sm:py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-serif font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all border border-emerald-800 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-1 disabled:opacity-50"
                          title="Complete and Deliver drink"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          {completingId === order.id ? 'Processing...' : 'Done'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT: Visual Map Checker (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="bg-white border border-amber-900/10 px-5 py-4 rounded-xl shadow-sm flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-800 animate-pulse" />
              <h2 className="font-serif text-lg font-bold text-red-950">Table Locator Map</h2>
            </div>

            <div className="bg-white border-2 border-amber-900/10 p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-amber-800/30"></div>

              {/* Locator Header */}
              <div className="text-center w-full mb-3 pb-2 border-b border-amber-900/5">
                {selectedOrder ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 font-mono text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                      Locating Table {selectedOrder.table}
                    </span>
                    <span className="text-xs text-amber-900/60">
                      for {selectedOrder.drinkName}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-amber-900/50 font-bold uppercase tracking-wider">
                    Select an order to locate table position
                  </span>
                )}
              </div>

              {/* Numbered Floor Plan Image Container */}
              <div className="relative w-full aspect-[4/3] bg-amber-50/20 border border-amber-900/5 rounded-xl overflow-hidden shadow-inner">
                <img 
                  src="/fall_floor_plan_numbered.png" 
                  alt="Numbered Floor Plan" 
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Pulsing Table Highlight Pointer */}
                {highlightedTable && selectedOrder && (
                  <div
                    style={{
                      left: `${highlightedTable.x}%`,
                      top: `${highlightedTable.y}%`,
                      width: `${highlightedTable.isRound ? '8%' : '10%'}`,
                      height: `${highlightedTable.isRound ? '8%' : '7.5%'}`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-30 flex items-center justify-center border-2 border-red-500 bg-red-500/40 shadow-lg ${
                      highlightedTable.isRound ? 'rounded-full' : 'rounded-lg'
                    } animate-ping`}
                  >
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                  </div>
                )}
                {highlightedTable && selectedOrder && (
                  <div
                    style={{
                      left: `${highlightedTable.x}%`,
                      top: `${highlightedTable.y}%`,
                      width: `${highlightedTable.isRound ? '8.5%' : '10.5%'}`,
                      height: `${highlightedTable.isRound ? '8.5%' : '8%'}`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-20 flex items-center justify-center border-2 border-red-600 bg-red-500/20 shadow-md ${
                      highlightedTable.isRound ? 'rounded-full' : 'rounded-lg'
                    }`}
                  >
                    {/* Centered Table Marker Pin */}
                    <div className="absolute -top-12 bg-red-600 text-white font-sans font-extrabold text-xs px-2 py-1 rounded shadow border border-red-700 flex items-center gap-1 animate-bounce">
                      <MapPin className="w-3 h-3 text-amber-200 fill-amber-200" />
                      T-{selectedOrder.table}
                    </div>
                  </div>
                )}
              </div>

              {/* Map Info Legend */}
              <div className="mt-4 text-[10px] text-amber-900/40 uppercase tracking-widest font-sans text-center flex items-center gap-1.5 justify-center">
                <Coffee className="w-3.5 h-3.5 text-amber-700/50" />
                <span>Highlighted table indicates guest location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
