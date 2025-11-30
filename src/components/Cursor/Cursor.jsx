import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Start as true to prevent flash

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

    let rafId;

    const updateCursor = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseMove = (e) => {
      updateCursor(e);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Check for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out',
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: isHovering ? '12px' : '8px',
            height: isHovering ? '12px' : '8px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.9) 0%, rgba(139, 92, 246, 0.7) 100%)',
            boxShadow: `0 0 ${isHovering ? '15px' : '10px'} rgba(14, 165, 233, 0.6)`,
          }}
        />
      </div>
    </>
  );
};

export default Cursor;

