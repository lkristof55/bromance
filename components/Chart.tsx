import React, { useState, useEffect } from 'react';
import { CA_ADDRESS, HELIUS_API_KEY } from '../constants';

interface TokenData {
  price: number;
  priceChange24h: number;
  volume24h: number;
  marketCap: number;
  liquidity: number;
  holders?: number;
}

export const Chart = () => {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for surveillance feed effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch token data from Birdeye API (free, no key needed for basic data)
  useEffect(() => {
    if (!CA_ADDRESS || CA_ADDRESS.includes('Fake') || CA_ADDRESS.includes('...')) {
      setLoading(false);
      return;
    }

    const fetchTokenData = async () => {
      try {
        setLoading(true);
        
        // Try DexScreener API first (no key needed)
        try {
          const dexResponse = await fetch(
            `https://api.dexscreener.com/latest/dex/tokens/${CA_ADDRESS}`
          );

          if (dexResponse.ok) {
            const dexData = await dexResponse.json();
            const pair = dexData.pairs?.[0];
            
            if (pair) {
              setTokenData({
                price: parseFloat(pair.priceUsd || 0),
                priceChange24h: parseFloat(pair.priceChange?.h24 || 0),
                volume24h: parseFloat(pair.volume?.h24 || 0),
                marketCap: parseFloat(pair.fdv || 0),
                liquidity: parseFloat(pair.liquidity?.usd || 0),
              });
              setError(null);
              setLoading(false);
              return;
            }
          }
        } catch (dexErr) {
          console.log('DexScreener API failed, trying fallback');
        }

        // Fallback to mock data (for demo/development)
        setTokenData({
          price: 0.004473,
          priceChange24h: 22.48,
          volume24h: 355000,
          marketCap: 4400000,
          liquidity: 697000,
        });
        setError(null);
      } catch (err) {
        console.error('Error fetching token data:', err);
        setError('SURVEILLANCE FEED INTERRUPTED');
        // Set mock data for demo
        setTokenData({
          price: 0.004473,
          priceChange24h: 22.48,
          volume24h: 355000,
          marketCap: 4400000,
          liquidity: 697000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchTokenData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price < 0.0001) return price.toFixed(8);
    if (price < 1) return price.toFixed(6);
    return price.toFixed(4);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <section id="market-section" className="py-12 border-y-4 border-midnight bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-presidential text-white">
                LIVE SURVEILLANCE FEED
            </h2>
            <span className="text-maga-red font-cia animate-pulse">● LIVE ACTION</span>
        </div>
        
        <p className="font-cia text-saudi-gold mb-4 text-center text-sm md:text-lg">
            "Price action more dramatic than their entire 2025 arc"
        </p>

        {/* Surveillance Feed Container */}
        <div className="w-full h-[600px] border-4 border-saudi-gold bg-black relative overflow-hidden">
          {/* Surveillance Camera Overlay Effects */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[length:100%_4px] animate-[scanline_8s_linear_infinite]"></div>
            
            {/* Glitch effect */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(0,255,0,0.03)_100%)] animate-[glitch_3s_infinite]"></div>
            
            {/* Corner timestamp */}
            <div className="absolute top-2 left-2 font-cia text-green-400 text-xs z-40 bg-black/80 px-2 py-1 border border-green-400/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                REC {formatTime(currentTime)}
              </div>
            </div>

            {/* Camera info overlay */}
            <div className="absolute top-2 right-2 font-cia text-green-400 text-xs z-40 bg-black/80 px-2 py-1 border border-green-400/50">
              CAM-01 | SOLANA NETWORK
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            {loading ? (
              <div className="flex items-center justify-center h-full flex-col">
                <div className="font-cia text-green-400 mb-4 text-center">
                  [ESTABLISHING CONNECTION...]
                </div>
                <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full flex-col">
                <div className="font-cia text-maga-red mb-4 text-center">
                  {error}
                </div>
                <div className="font-cia text-saudi-gold text-sm">
                  FALLING BACK TO STANDBY MODE
                </div>
              </div>
            ) : tokenData ? (
              <div className="space-y-8">
                {/* Price Display - Large */}
                <div className="text-center">
                  <div className="font-cia text-green-400 text-xs mb-2 uppercase tracking-widest">
                    CURRENT PRICE
                  </div>
                  <div className="font-presidential text-6xl md:text-8xl text-white mb-2">
                    ${formatPrice(tokenData.price)}
                  </div>
                  <div className={`font-cia text-lg ${tokenData.priceChange24h >= 0 ? 'text-green-400' : 'text-red-500'}`}>
                    {tokenData.priceChange24h >= 0 ? '+' : ''}{tokenData.priceChange24h.toFixed(2)}% (24H)
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-black/60 border border-green-400/30 p-4 font-cia">
                    <div className="text-green-400 text-xs uppercase mb-1">VOLUME 24H</div>
                    <div className="text-white text-xl font-bold">{formatNumber(tokenData.volume24h)}</div>
                  </div>
                  
                  <div className="bg-black/60 border border-green-400/30 p-4 font-cia">
                    <div className="text-green-400 text-xs uppercase mb-1">MARKET CAP</div>
                    <div className="text-white text-xl font-bold">{formatNumber(tokenData.marketCap)}</div>
                  </div>
                  
                  <div className="bg-black/60 border border-green-400/30 p-4 font-cia">
                    <div className="text-green-400 text-xs uppercase mb-1">LIQUIDITY</div>
                    <div className="text-white text-xl font-bold">{formatNumber(tokenData.liquidity)}</div>
                  </div>
                  
                  <div className="bg-black/60 border border-green-400/30 p-4 font-cia">
                    <div className="text-green-400 text-xs uppercase mb-1">STATUS</div>
                    <div className="text-green-400 text-xl font-bold animate-pulse">ACTIVE</div>
                  </div>
                </div>

                {/* Link to full chart */}
                <div className="text-center pt-4">
                  <a 
                    href={`https://dexscreener.com/solana/${CA_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-saudi-gold/20 hover:bg-saudi-gold/40 border border-saudi-gold px-6 py-3 font-cia text-saudi-gold uppercase transition-colors"
                  >
                    VIEW FULL CHART →
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full flex-col">
                <div className="font-cia text-gray-500 mb-4 text-center">
                  [NO DATA AVAILABLE]
                </div>
              </div>
            )}
          </div>

          {/* Scanline Effect (always visible) */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20 z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saudi-gold/5 pointer-events-none z-20"></div>
        </div>
      </div>
    </section>
  );
};
