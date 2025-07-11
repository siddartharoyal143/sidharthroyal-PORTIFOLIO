import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => 
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, delayBetweenTexts]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span className="typing-cursor h-8 w-1 ml-1"></span>
    </div>
  );
};

export default TypingAnimation;