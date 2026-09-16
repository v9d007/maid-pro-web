import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 192,
  height: 192,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: 'linear-gradient(135deg, #00332d 0%, #005c55 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          borderRadius: '42px',
          fontWeight: 900,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.06em',
          position: 'relative',
        }}
      >
        <span>M<span style={{ color: '#F59E0B' }}>P</span></span>
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: '#F59E0B',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
