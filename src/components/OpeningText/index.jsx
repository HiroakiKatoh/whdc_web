import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const OpeningText = () => {
  const titleRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
        duration: 0.6
      }
    });

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: "power4.out",
      delay: 0.2
    })
    .from(text1Ref.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out"
    }, "-=0.2")
    .from(text2Ref.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out"
    }, "-=0.1")
    .from(text3Ref.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out"
    }, "-=0.1")
    .from(text4Ref.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out"
    }, "-=0.1");
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: '#fff',
      zIndex: 100,
      mixBlendMode: 'normal',
      isolation: 'isolate',
      pointerEvents: 'none',
      width: '90%',
      maxWidth: '1200px'
    }}>
      <h1 
        ref={titleRef}
        style={{ 
          fontSize: 'clamp(2em, 5vw, 4em)',
          marginBottom: 'clamp(15px, 3vw, 30px)',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          WebkitTextStroke: '1px rgba(255,255,255,0.1)',
          lineHeight: '1.2'
        }}
      >
        Welcome to WHDC
      </h1>
      <p 
        ref={text1Ref}
        style={{ 
          fontSize: 'clamp(1em, 3vw, 1.8em)',
          marginBottom: 'clamp(8px, 2vw, 12px)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          lineHeight: '1.4'
        }}
      >
        我々が提供するのは価値創造の場、
      </p>
      <p 
        ref={text2Ref}
        style={{ 
          fontSize: 'clamp(1em, 3vw, 1.8em)',
          marginBottom: 'clamp(8px, 2vw, 12px)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          lineHeight: '1.4'
        }}
      >
        企業再成プラットフォーム
      </p>
      <p 
        ref={text3Ref}
        style={{ 
          fontSize: 'clamp(1em, 3vw, 1.8em)',
          marginBottom: 'clamp(8px, 2vw, 12px)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          lineHeight: '1.4'
        }}
      >
        ビジネスモデルの総合商社
      </p>
      <p 
        ref={text4Ref}
        style={{ 
          fontSize: 'clamp(1em, 3vw, 1.8em)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          lineHeight: '1.4'
        }}
      >
        THE WHY HOW DO COMPANY
      </p>
    </div>
  );
};

export default OpeningText;