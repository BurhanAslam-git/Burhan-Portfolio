import { useEffect, useState, useRef } from 'react';

const SpotlightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

    // Check dark mode
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    const isTouch = checkTouchDevice();
    checkDarkMode();

    // Don't run on touch devices
    if (isTouch) return;

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

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
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  // Spotlight settings based on dark mode
  const spotlightSize = 350;
  const darkOverlay = isDarkMode
    ? `rgba(0, 0, 0, 0.6)`
    : `rgba(0, 0, 0, 0.2)`;
  const lightOverlay = isDarkMode
    ? `rgba(0, 0, 0, 0.8)`
    : `rgba(0, 0, 0, 0.4)`;

  return (
    <>
      {/* Spotlight overlay - creates the darkening effect with bright center */}
      <div
        className="fixed inset-0 pointer-events-none z-[2] will-change-transform"
        style={{
          background: `radial-gradient(
            circle ${spotlightSize}px at ${position.x}px ${position.y}px,
            transparent 0%,
            transparent 35%,
            ${darkOverlay} 60%,
            ${lightOverlay} 100%
          )`,
          mixBlendMode: isDarkMode ? 'normal' : 'multiply',
        }}
      />
      
      {/* Spotlight glow ring - adds a subtle glow around the spotlight */}
      <div
        className="fixed pointer-events-none z-[2] will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: `${spotlightSize}px`,
          height: `${spotlightSize}px`,
          borderRadius: '50%',
          background: isDarkMode
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(14, 165, 233, 0.1) 40%, transparent 70%)',
          boxShadow: isDarkMode
            ? `
              0 0 100px rgba(14, 165, 233, 0.4),
              0 0 150px rgba(139, 92, 246, 0.3),
              inset 0 0 80px rgba(255, 255, 255, 0.05)
            `
            : `
              0 0 80px rgba(14, 165, 233, 0.2),
              0 0 120px rgba(139, 92, 246, 0.15),
              inset 0 0 60px rgba(255, 255, 255, 0.1)
            `,
          border: isDarkMode
            ? '1px solid rgba(14, 165, 233, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'left 0.2s cubic-bezier(0.4, 0, 0.2, 1), top 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </>
  );
};

export default SpotlightCursor;

