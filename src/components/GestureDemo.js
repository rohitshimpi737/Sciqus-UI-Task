import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Swipe, TouchApp } from '@mui/icons-material';

const GestureContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #FECFEF 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  user-select: none;
  overflow: hidden;
  cursor: pointer;
  touch-action: pan-x;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const GestureIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  opacity: ${props => props.show ? 1 : 0.6};
  transition: opacity 0.3s;
`;

const SwipeHint = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
  
  @media (min-width: 769px) {
    &:before {
      content: "Click and drag or ";
    }
  }
  
  @media (max-width: 768px) {
    &:before {
      content: "";
    }
  }
`;

const GestureDemo = () => {
  const [gestureText, setGestureText] = useState('Swipe left or right');
  const [isGesturing, setIsGesturing] = useState(false);
  const [startX, setStartX] = useState(null);
  const containerRef = useRef(null);

  const handleGestureStart = (clientX) => {
    setStartX(clientX);
    setIsGesturing(true);
  };

  const handleGestureMove = (clientX) => {
    if (startX === null) return;
    
    const diff = clientX - startX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setGestureText('👉 Right swipe detected!');
      } else {
        setGestureText('👈 Left swipe detected!');
      }
    }
  };

  const handleGestureEnd = () => {
    setStartX(null);
    setIsGesturing(false);
    
    setTimeout(() => {
      setGestureText('Swipe left or right');
    }, 2000);
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleGestureStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleGestureMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleGestureEnd();
  };

  // Mouse events (for desktop)
  const handleMouseDown = (e) => {
    handleGestureStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (startX !== null) {
      handleGestureMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (startX !== null) {
      handleGestureEnd();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add mouse event listeners to document for drag functionality
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [startX]);

  return (
    <GestureContainer
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      <GestureIndicator show={isGesturing}>
        <TouchApp />
        <Swipe />
      </GestureIndicator>
      
      <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        {gestureText}
      </div>
      
      <SwipeHint>
        swipe to interact
      </SwipeHint>
    </GestureContainer>
  );
};

export default GestureDemo;
