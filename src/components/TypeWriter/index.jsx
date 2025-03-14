import React, { useEffect, useState } from 'react';

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let counter = -1;
    let textArray = [];
    
    const typeJs = () => {
      if (isTyping) {
        if (counter < text.length) {
          counter++;
          setDisplayText(prev => prev + text.charAt(counter));
          textArray = text.split('');
        } else {
          setIsTyping(false);
        }
      } else {
        textArray.pop();
        setDisplayText(textArray.join(''));
        if (textArray.length === 0) {
          counter = -1;
          setIsTyping(true);
        }
      }
    };

    const interval = setInterval(typeJs, 200);
    return () => clearInterval(interval);
  }, [text, isTyping]);

  return (
    <h1 className="typeJsText">
      {displayText}
    </h1>
  );
};

export default TypeWriter; 