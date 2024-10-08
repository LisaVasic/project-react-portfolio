import React from 'react';
import styled from 'styled-components';

export const Skills = () => {
  return (
    <SkillsOuterWrapper>
      <SkillsInnerWrapper>
        <h5>SKILLS</h5>
        <SkillsContainer>
          <SkillList>
            <h7>CODE</h7>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Styled Components</p>
            <p>GitHub</p>
          </SkillList>
          <SkillList>
            <h7>TOOLBOX</h7>
            <p>Figma</p>
            <p>Slack</p>
            <p>Adobe Photoshop</p>
            <p>Adobe Illustrator</p>
            <p>Adobe InDesign</p>
          </SkillList>
          <SkillList className="More">
            <h7>MORE</h7>
            <p>Graphic design</p>
            <p>Marketing</p>
            <p>Events</p>
            <p>Customer service</p>
          </SkillList>
        </SkillsContainer>
      </SkillsInnerWrapper>
    </SkillsOuterWrapper>
  )
}

export const SkillsOuterWrapper = styled.div`
    background-color: var(--beige);
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

`;

export const SkillsInnerWrapper = styled.div`  
    max-width: 900px;
    width: 80vw;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const SkillsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 30px;
gap: 25px;

.More {
    display:none;
}

@media (min-width: 668px) {
    gap: 30px;

    .More {
        display:inline;
        flex-direction: column;
    }
  }

`;

export const SkillList = styled.div`

h7 {
    font-weight: 700;
}

@media (min-width: 668px) {
    font-size: 18px;
}

@media (min-width: 1024px) {
  font-size: 20px;
}

`;

