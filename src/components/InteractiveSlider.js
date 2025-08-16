import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  background: #f8f9fa;
`;

const SliderContent = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(-${props => props.currentSlide * 100}%);
  transition: transform 0.3s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: 15px;' : 'right: 15px;'}
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SliderIndicators = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const SliderDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: white;
  }
`;

const InteractiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Interactive Feature 1',
      background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
    },
    {
      id: 2,
      title: 'Interactive Feature 2',
      background: 'linear-gradient(45deg, #A8E6CF, #88D8C0)'
    },
    {
      id: 3,
      title: 'Interactive Feature 3',
      background: 'linear-gradient(45deg, #FFD93D, #6BCF7F)'
    }
  ];

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
    <SliderContainer>
      <SliderContent currentSlide={currentSlide}>
        {slides.map((slide, index) => (
          <Slide key={slide.id} background={slide.background}>
            {slide.title}
          </Slide>
        ))}
      </SliderContent>

      <SliderButton direction="prev" onClick={prevSlide}>
        <ArrowBack />
      </SliderButton>

      <SliderButton direction="next" onClick={nextSlide}>
        <ArrowForward />
      </SliderButton>

      <SliderIndicators>
        {slides.map((_, index) => (
          <SliderDot
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </SliderIndicators>
    </SliderContainer>
  );
};

export default InteractiveSlider;
