import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 120, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length && isTyping) {
      setIsTyping(false);
      // Blinking cursor effect after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`inline-block w-0.5 h-[0.9em] bg-current ml-1 align-middle ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          transition: 'opacity 0.3s ease-in-out',
          animation: isTyping ? 'none' : 'blink 1s infinite'
        }}
      />
    </span>
  );
};

export default Typewriter;
