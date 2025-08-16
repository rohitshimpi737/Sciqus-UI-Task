import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const CarouselSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${props => props.color1} 0%, ${props => props.color2} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateX(${props => props.offset * 100}%);
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: 10px;' : 'right: 10px;'}
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: white;
  }
`;

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { 
      id: 1, 
      title: 'Welcome to Our Platform',
      color1: '#667eea',
      color2: '#764ba2'
    },
    { 
      id: 2, 
      title: 'Innovative Solutions',
      color1: '#f093fb',
      color2: '#f5576c'
    },
    { 
      id: 3, 
      title: 'Modern Design',
      color1: '#4facfe',
      color2: '#00f2fe'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <CarouselSlide
          key={slide.id}
          offset={index - currentSlide}
          color1={slide.color1}
          color2={slide.color2}
        >
          {slide.title}
        </CarouselSlide>
      ))}
      
      <CarouselButton direction="prev" onClick={prevSlide}>
        <ChevronLeft />
      </CarouselButton>
      
      <CarouselButton direction="next" onClick={nextSlide}>
        <ChevronRight />
      </CarouselButton>
      
      <CarouselIndicators>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
};

export default ImageCarousel;
