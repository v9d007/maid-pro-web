import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Maid Pro Solution 4 You - Verified Home Cleaning & Domestic Help Agra';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0b1318 0%, #002824 50%, #004842 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Subtle decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'rgba(45, 212, 191, 0.15)',
            borderRadius: '50%',
            filter: 'blur(90px)',
          }}
        />

        {/* Brand Logo Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 900, letterSpacing: '-0.03em' }}>
            Maid<span style={{ color: '#f59e0b' }}>Pro</span>
          </span>
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              marginBottom: '10px',
            }}
          />
        </div>

        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#fbbf24',
            marginBottom: '32px',
          }}
        >
          Solution 4 You • Agra, Uttar Pradesh
        </div>

        {/* Catchphrase */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 800,
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.25,
            marginBottom: '36px',
            color: '#f0fdf9',
          }}
        >
          Agra's Trusted & Police-Verified Domestic Staff & House Cleaning
        </div>

        {/* Trust Pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: 20,
              fontWeight: 700,
              color: '#9cf2e8',
            }}
          >
            ✓ 100% Police-Verified
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: 20,
              fontWeight: 700,
              color: '#9cf2e8',
            }}
          >
            ✓ Instant Free Replacement
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 24px',
              borderRadius: '999px',
              fontSize: 20,
              fontWeight: 700,
              color: '#9cf2e8',
            }}
          >
            ✓ 24/7 Agra Support
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
