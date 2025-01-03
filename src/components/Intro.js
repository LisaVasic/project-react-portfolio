import React from 'react';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroOuterWrapper>
      <IntroInnerWrapper>
        <p> Hi there! I’m a junior frontend developer and graphic designer with a
          strong passion for creative problem-solving. I’m enthusiastic
          about expanding my skill set and am currently aspiring to become
          a full-stack developer. My experience in coordination has helped me manage
          multiple tasks at once and stay organized under pressure. I’m excited to use
          my skills in frontend development and design, while also learning new technologies
          to contribute to exciting projects.
        </p>
      </IntroInnerWrapper>
    </IntroOuterWrapper>
  )
}

export const IntroOuterWrapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: #e9e2dc;
`;

export const IntroInnerWrapper = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 20rem;
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

