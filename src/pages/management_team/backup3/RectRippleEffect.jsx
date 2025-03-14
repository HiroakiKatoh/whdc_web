import React, { useEffect, useRef } from 'react';

const RectRippleEffect = ({ 
  imageUrl, 
  className,
  style,
  dropRadius = 30,
  perturbance = 0.04,
  resolution = 256,
  interactive = true,
  crossOrigin = '',
  width = '300px',
  height = '400px'
}) => {
  const rippleRef = useRef(null);

  useEffect(() => {
    let $;
    let $element;

    const initRipples = async () => {
      try {
        if (typeof window !== 'undefined') {
          $ = window.jQuery;
          if (!$ || !$.fn.ripples) {
            console.error('jQuery or ripples plugin not loaded');
            return;
          }

          $element = $(rippleRef.current);
          
          // 既存のripples instanceがあれば破棄
          if ($element.data('ripples')) {
            $element.ripples('destroy');
          }

          // 新しいripples instanceを初期化
          $element.ripples({
            dropRadius: dropRadius,
            perturbance: perturbance,
            resolution: resolution,
            interactive: interactive,
            crossOrigin: crossOrigin
          });

          // 自動的に波紋を生成
          const generateRandomRipple = () => {
            const x = Math.random() * $element.width();
            const y = Math.random() * $element.height();
            $element.ripples('drop', x, y, dropRadius * 1.5, perturbance * 1.2);
          };

          // 定期的に波紋を生成
          const interval = setInterval(generateRandomRipple, 3000);

          return () => clearInterval(interval);
        }
      } catch (error) {
        console.error('Error initializing ripples:', error);
      }
    };

    // DOMが準備できてから初期化
    if (document.readyState === 'complete') {
      initRipples();
    } else {
      window.addEventListener('load', initRipples);
    }

    // Cleanup
    return () => {
      if ($element && $element.data('ripples')) {
        $element.ripples('destroy');
      }
      window.removeEventListener('load', initRipples);
    };
  }, [dropRadius, perturbance, resolution, interactive, crossOrigin]);

  // プログラムで波紋を作成するメソッド
  const createDrop = (x, y, radius = dropRadius, strength = 0.04) => {
    if (rippleRef.current) {
      $(rippleRef.current).ripples('drop', x, y, radius, strength);
    }
  };

  return (
    <div
      ref={rippleRef}
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: width,
        height: height,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        ...style
      }}
    />
  );
};

export default RectRippleEffect; 