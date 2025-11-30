import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const rafRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringBig, setIsHoveringBig] = useState(false);

  const mousePosition = useRef({ x: 0, y: 0 });
  const outlinePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
      return isTouch;
    };

    const isTouch = checkTouchDevice();
    if (isTouch) return;

    // Smooth cursor animation loop using requestAnimationFrame
    const animateCursor = () => {
      if (!cursorDotRef.current || !cursorOutlineRef.current) return;

      // Cursor dot follows immediately (no delay)
      cursorDotRef.current.style.left = `${mousePosition.current.x}px`;
      cursorDotRef.current.style.top = `${mousePosition.current.y}px`;

      // Outline follows with smooth delay (0.15s for normal, 0.2s when hovering)
      const outlineSpeed = isHovering ? 0.2 : 0.15;
      outlinePosition.current.x +=
        (mousePosition.current.x - outlinePosition.current.x) * outlineSpeed;
      outlinePosition.current.y +=
        (mousePosition.current.y - outlinePosition.current.y) * outlineSpeed;

      cursorOutlineRef.current.style.left = `${outlinePosition.current.x}px`;
      cursorOutlineRef.current.style.top = `${outlinePosition.current.y}px`;

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animateCursor);
      }

      // Magnetic effect for elements with data-magnetic attribute
      const magneticElements = document.querySelectorAll('[data-magnetic]');
      magneticElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = 80; // Magnetic field radius
        
        if (distance < maxDistance) {
          // Calculate movement strength (0.4 = max 40% movement)
          const strength = (1 - distance / maxDistance) * 0.4;
          const moveX = distanceX * strength;
          const moveY = distanceY * strength;
          
          // Apply smooth transform
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          // Return to original position
          element.style.transform = 'translate(0, 0)';
        }
      });
    };

    // Detect hover states for cursor styling
    const handleMouseEnter = (e) => {
      const target = e.target;
      const magnetic = target.closest('[data-magnetic]');
      const isLink = target.closest('a') || target.tagName === 'A';
      const isButton = target.closest('button') || target.tagName === 'BUTTON';
      const isCard = target.closest('[data-card]') || target.closest('.project-card');
      
      if (magnetic || isLink || isButton || isCard) {
        setIsHovering(true);
        
        if (isLink) {
          setIsHoveringLink(true);
        }
        
        if (isCard) {
          const rect = (magnetic || target).getBoundingClientRect();
          if (rect.width > 200 || rect.height > 200) {
            setIsHoveringBig(true);
          }
        }
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      const magnetic = target.closest('[data-magnetic]');
      const isLink = target.closest('a') || target.tagName === 'A';
      const isButton = target.closest('button') || target.tagName === 'BUTTON';
      const isCard = target.closest('[data-card]') || target.closest('.project-card');
      
      if (magnetic || isLink || isButton || isCard) {
        setIsHovering(false);
        setIsHoveringLink(false);
        setIsHoveringBig(false);
      }
    };

    // Initialize cursor position on first mouse move
    const handleFirstMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      outlinePosition.current = { x: e.clientX, y: e.clientY };
      window.removeEventListener('mousemove', handleFirstMove);
    };

    window.addEventListener('mousemove', handleFirstMove);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Start animation loop
    rafRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleFirstMove);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isHovering, isHoveringLink, isHoveringBig]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Cursor Dot - Main cursor (solid dot) */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          width: isHovering ? '6px' : '8px',
          height: isHovering ? '6px' : '8px',
          borderRadius: '50%',
          background: 'rgba(14, 165, 233, 0.95)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      
      {/* Cursor Outline - Hollow circle that follows with delay */}
      <div
        ref={cursorOutlineRef}
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          width: isHovering ? (isHoveringBig ? '60px' : '45px') : '50px',
          height: isHovering ? (isHoveringBig ? '60px' : '45px') : '50px',
          borderRadius: '50%',
          border: `2px solid ${isHoveringLink ? 'rgba(139, 92, 246, 0.8)' : 'rgba(14, 165, 233, 0.6)'}`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s ease-out',
          boxShadow: isHoveringBig 
            ? '0 0 25px rgba(14, 165, 233, 0.4)' 
            : isHovering 
            ? '0 0 15px rgba(14, 165, 233, 0.3)' 
            : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
