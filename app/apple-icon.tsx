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
          fontSize: 100,
          background: 'linear-gradient(135deg, #004842 0%, #005c55 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '40px',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <span style={{ transform: 'translateY(-4px)' }}>M</span>
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '28px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.6)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
