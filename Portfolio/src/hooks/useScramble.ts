import { useState, useCallback, useEffect } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const useScramble = (text: string, duration: number = 1000, delay: number = 0) => {
  const [output, setOutput] = useState('');

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = (duration / 1000) * 60;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      const scrambled = text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (i < text.length * progress) return text[i];
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');

      setOutput(scrambled);

      if (frame >= totalFrames) {
        setOutput(text);
        clearInterval(interval);
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [text, duration]);

  useEffect(() => {
    const timeout = setTimeout(scramble, delay);
    return () => clearTimeout(timeout);
  }, [scramble, delay]);

  return output;
};
