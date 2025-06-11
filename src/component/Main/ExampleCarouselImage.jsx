import React from 'react';

function ExampleCarouselImage({ src, alt = '', text }) {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* ✅ 블러 처리된 배경 */}
      <img
        src={src}
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(12px) brightness(0.7)',
          zIndex: 0,
        }}
      />

      {/* ✅ 실제 이미지 중앙 정렬 */}
      <img
        src={src}
        alt={alt || text}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default ExampleCarouselImage;
