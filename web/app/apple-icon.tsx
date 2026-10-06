import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: 'linear-gradient(135deg, #002e2a 0%, #005c55 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          borderRadius: '40px',
          fontWeight: 900,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.05em',
          position: 'relative',
        }}
      >
        <span>M<span style={{ color: '#F59E0B' }}>P</span></span>
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#F59E0B',
            boxShadow: '0 0 16px rgba(245, 158, 11, 0.8)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
