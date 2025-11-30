import { useEffect, useRef, useState } from 'react';

const MouseGlow = () => {
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Start as true to prevent flash
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Disable on mobile/touch devices
    if (isTouch) return;

    const updateMousePosition = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    const handleMouseMove = (e) => {
      updateMousePosition(e);
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
      ref={glowRef}
      className="fixed pointer-events-none z-[1] will-change-transform"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    >
      <div
        className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full opacity-25 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(139, 92, 246, 0.35) 25%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default MouseGlow;

