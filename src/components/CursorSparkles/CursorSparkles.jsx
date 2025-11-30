import { useEffect, useState } from 'react';

const CursorSparkles = () => {
  const [sparkles, setSparkles] = useState([]);
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

    // Disable on mobile/touch devices
    if (isTouch) return;

    let animationFrameId;
    let lastTime = 0;
    const throttleDelay = 50; // Throttle sparkle creation

    const createSparkle = (x, y) => {
      const newSparkle = {
        id: Math.random(),
        x,
        y,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 1000 + 500,
        delay: Math.random() * 100,
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]); // Keep max 15 sparkles

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, newSparkle.duration + newSparkle.delay);
    };

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleDelay) return;
      lastTime = currentTime;

      animationFrameId = requestAnimationFrame(() => {
        // Create sparkle with slight random offset
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        createSparkle(e.clientX + offsetX, e.clientY + offsetY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <div className="fixed pointer-events-none z-[100]">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background: `radial-gradient(circle, rgba(14, 165, 233, 0.8) 0%, rgba(139, 92, 246, 0.6) 50%, transparent 100%)`,
            boxShadow: `0 0 ${sparkle.size * 2}px rgba(14, 165, 233, 0.6)`,
            transform: 'translate(-50%, -50%)',
            animation: `sparkleFade ${sparkle.duration}ms ${sparkle.delay}ms ease-out forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorSparkles;

