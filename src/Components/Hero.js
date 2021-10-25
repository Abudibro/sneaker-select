// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';

// Assets
import heroBg1 from '../Resources/hero-bg.jpg';
import heroBg2 from '../Resources/hero-bg-2.png';
import heroBg3 from '../Resources/hero-bg-3.jpg';

const StyledOverlayContainer = styled(OverlayContainer)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2, H3 {
      margin: 0 36px;
    }
  }
`;

const Button = styled.button`
    background: transparent;
    color: #e6e6e6;
    border: 3px solid #e6e6e6;
    border-radius: 0px;
    padding: 18px 40px;
    display: inline-block;
    font-family: "Lucida Console", Monaco, monospace;
    font-weight: 2rem;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #e6e6e6;
    -webkit-transition: ease-out 0.7s;
    -moz-transition: ease-out 0.7s;
    transition: ease-out 0.5s;
    &:focus {outline:0;}
    &:hover {
        box-shadow: inset 400px 0 0 0 #e6e6e6;
        color: black;
    }
    &:active { transform: scale(0.92);}
`;

export default function AutoplayButtonSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      set
      initialSlide={1}
      style={{
        color: '#FFF',
        left: '50px',
        marginBottom: '50px',
        minHeight: '400px'
      }}
      settings={{
        slidingDuration: 750,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 2000,
        height: 'calc(100vh - 165px)',
        width: 'calc(100vw - 100px)',
      }}
    >
      <StyledOverlayContainer>
        <h1 className='m-3 display-2' style={{color: '#e6e6e6'}}><strong><strong>Bring power to your steps</strong></strong></h1>
        <Link to='/shop'>
          <Button className='m-3'>Shop Now</Button>
        </Link>
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: heroBg1,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: heroBg2,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: heroBg3,
          backgroundAnimation: 'fade',
        }}
      />
      <Nav />
    </HeroSlider>
  );
}