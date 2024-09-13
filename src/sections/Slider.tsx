import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const SliderContainer = styled.div`
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const SlideTrack = styled.div`
  display: flex;
  width: 200%; // Double the width to hold the duplicated slides
  animation: ${scroll} 40s linear infinite;
`;

const Slide = styled.div`
  height: 100px;
  width: 250px;
`;

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/65/Womenshealthlogo.svg",
];

const Slider: React.FC = () => {
  const slides = images.concat(images); // Duplicate slides for seamless loop

  return (
    <SliderContainer>
      <SlideTrack>
        {slides.map((src, index) => (
          <Slide key={index}>
            <img src={src} height="100" width="250" alt={`slide-${index}`} />
          </Slide>
        ))}
      </SlideTrack>
    </SliderContainer>
  );
};

export default Slider;
