import { useState, useEffect } from 'react';
import './TextTyper.css';

const TextTyper = ({ texts, typingSpeed = 150, deletingSpeed = 100, pauseTime = 100 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timerId;
    const fullText = texts[textIndex];

    if (!isDeleting && charIndex === fullText.length) {
      timerId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      timerId = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 0);
    } else {
      const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
      timerId = setTimeout(() => {
        setCurrentText(fullText.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }, currentSpeed);
    }

    return () => clearTimeout(timerId);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-typer">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TextTyper;