import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const Balloon = styled.div`
  width: 30px;
  height: 50px;
  background-color: #ff5722;
  border-radius: 50% 50% 60% 60%;
  position: absolute;
  bottom: 0;
  animation: ${bounce} 2s infinite;
`;

const CountdownContainer = styled.div`
  position: relative;
  height: 200px;
  font-size: 24px;
  text-align: center;
  margin-top: 50px;
`;

const CountdownAnimation = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 4 : prevCount - 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Ensure an empty dependency array for useEffect

  return (
    <CountdownContainer>
      {[...Array(count)].map((_, index) => (
        <Balloon key={index} style={{ left: `${index * 40}px` }} />
      ))}
      {count === 0 ? 'Happy New Year 2024!' : `Countdown: ${count}`}
    </CountdownContainer>
  );
};

export default CountdownAnimation;
