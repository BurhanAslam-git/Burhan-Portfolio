import { useEffect, useState, useRef } from 'react';

const CursorShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const rafRef = useRef(null);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      return isTouch;
    };

    const isTouch = checkTouchDevice();

    // Don't run on touch devices
    if (isTouch) return;

    const updatePosition = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    const handleMouseMove = (e) => {
      updatePosition(e);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
        boxShadow: `
          0 0 40px rgba(14, 165, 233, 0.3),
          0 0 60px rgba(139, 92, 246, 0.2)
        `,
        filter: 'blur(20px)',
        transition: 'left 0.2s ease-out, top 0.2s ease-out',
      }}
    />
  );
};

export default CursorShadow;

