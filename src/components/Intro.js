import React from 'react';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroOuterWrapper>
      <IntroInnerWrapper>
        <p> Hi there! I’m a junior frontend developer and graphic designer with a
          strong passion for creative problem-solving. I’m enthusiastic
          about expanding my skill set and am currently aspiring to become
          a full-stack developer.My background in coordination has honed my
          ability to manage multiple tasks simultaneously and stay organized under pressure.
          I am eager to leverage my skills in both frontend development and design while
          learning new technologies to contribute effectively to dynamic projects.
        </p>
      </IntroInnerWrapper>
    </IntroOuterWrapper>
  )
}

export const IntroOuterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: #e9e2dc;
`;

export const IntroInnerWrapper = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 200px;
  display: flex;
  align-items: center;
  line-height: 25px;
 

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

