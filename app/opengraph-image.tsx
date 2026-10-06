import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Maid Pro Solution 4 You - Verified Home Cleaning & Domestic Help Agra';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #061e1b 0%, #003630 45%, #004d45 100%)',
          padding: '48px 60px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient Top Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '240px',
            background: 'radial-gradient(ellipse, rgba(45, 212, 191, 0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Central Content Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1080px',
            background: 'rgba(5, 30, 27, 0.75)',
            border: '2px solid rgba(45, 212, 191, 0.35)',
            borderRadius: '28px',
            padding: '44px 50px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Logo Wordmark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '6px',
              marginBottom: '4px',
            }}
          >
            <span
              style={{
                fontSize: '68px',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                lineHeight: 1,
              }}
            >
              Maid<span style={{ color: '#F59E0B' }}>Pro</span>
            </span>
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#F59E0B',
                marginBottom: '8px',
              }}
            />
          </div>

          {/* Tagline Subhead */}
          <div
            style={{
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FBBF24',
              marginBottom: '24px',
            }}
          >
            SOLUTION 4 YOU • AGRA, UTTAR PRADESH
          </div>

          {/* Main Hero Headline */}
          <div
            style={{
              fontSize: '40px',
              fontWeight: 900,
              textAlign: 'center',
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '16px',
              maxWidth: '960px',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            Agra's Trusted & Police-Verified Domestic Staff & House Cleaning
          </div>

          {/* Services Scope Line */}
          <div
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#A7F3D0',
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            Daily Maids • Deep Cleaning • Cooks • Babysitters • 24hr Live-In Care
          </div>

          {/* Solid High-Contrast Trust Badges */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#064E3B',
                border: '1.5px solid #10B981',
                padding: '10px 22px',
                borderRadius: '999px',
                fontSize: '17px',
                fontWeight: 800,
                color: '#ECFDF5',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>100% Police Verified</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#064E3B',
                border: '1.5px solid #10B981',
                padding: '10px 22px',
                borderRadius: '999px',
                fontSize: '17px',
                fontWeight: 800,
                color: '#ECFDF5',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
              <span>Instant Free Replacement</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#064E3B',
                border: '1.5px solid #10B981',
                padding: '10px 22px',
                borderRadius: '999px',
                fontSize: '17px',
                fontWeight: 800,
                color: '#ECFDF5',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>24/7 Agra Support</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
