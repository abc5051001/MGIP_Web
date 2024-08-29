import React, { useRef } from 'react';
import HeroSlider, { Slide, Nav, Overlay, ButtonsNav } from 'hero-slider';
import dc from '../../pictures/dc.webp';
import alexandria from '../../pictures/monument.jpg';
import uspto from '../../pictures/uspto.webp';
import 'hero-slider/dist/index.css';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Wrapper from '../Wrapper/Wrapper';
import washingtonWhite from '../../pictures/washington_white.jpg';
const MyHeroSlider = () => {
  const goToNextSlideRef = useRef(null);
  const goToPreviousSlideRef = useRef(null);

  const handleBeforeSliding = (previousSlide, nextSlide) => {
    const totalSlides = 3;
    if (nextSlide >= totalSlides) {
      setTimeout(() => {
        if (goToNextSlideRef.current) {
          goToNextSlideRef.current(0);
        }
      }, 100);
    } else if (nextSlide < 0) {
      setTimeout(() => {
        if (goToPreviousSlideRef.current) {
          goToPreviousSlideRef.current(totalSlides - 1);
        }
      }, 100);
    }
  };

  return (
    <HeroSlider
      className="hero-slider"
      height="100vh"
      
      autoplay={{
        autoplayDuration: 8000,
        autoplayDebounce: 4000,
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 300, // Faster sliding duration
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: handleBeforeSliding,
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
        goToNextSlidePointer: goToNextSlideRef,
        goToPreviousSlidePointer: goToPreviousSlideRef,
      }}
      accessibility={{
        orientation: 'horizontal',
        shouldDisplayButtons: false,
      }}
      animations={{
        slidingAnimation: 'fade',
      }}
    >
      <Slide
        label="Washington, D.C."
        background={{
            
            
          backgroundImageSrc: dc,
          backgroundAnimation: 'zoom',
        }}
      >
        <Overlay>
          <Wrapper>
            <Title></Title>
            <Subtitle>Washington Monument, Washington D.C.</Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        label="Alexandria"
        shouldRenderMask={false}
        background={{
          maskBackgroundBlendMode: 'unset',
          backgroundImageSrc: washingtonWhite,
          backgroundAnimation: 'zoom',
        }}
      >
        <Overlay>
          <Wrapper>
            <Title></Title>
            <Subtitle>Thomas Jefferson</Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        label="USPTO"
        background={{
          backgroundImageSrc: uspto,
          backgroundAnimation: 'zoom',
        }}
      >
        <Overlay>
          <Wrapper>
            <Title></Title>
            <Subtitle>USPTO Office</Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <ButtonsNav />
    </HeroSlider>
  );
};

export default MyHeroSlider;
