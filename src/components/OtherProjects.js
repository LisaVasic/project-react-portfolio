import React from 'react';
import styled from 'styled-components';
import FeaturedOtherProjects from '../FeaturedOtherProjects.json';

export const OtherProjects = () => {
  // const GITHUB_NAME = 'LisaVasic';

  return (
    <OtherProjectOuterWrapper>
      <OtherProjectInnerWrapper>
        <h6 className="otherProjects">OTHER PROJECTS</h6>
        <InfoContainer>
          {FeaturedOtherProjects.map((project) => {
            return (
              <>
                <SubTitle
                  key={project.title}
                  href={project['netlify-name']}
                  target="_blank">
                  {project.title.toUpperCase()}
                </SubTitle>
                <SubParagraph>{project['project-description']}</SubParagraph>
                <SkillTagContainer>
                  {project.tags.map((tag) => (
                    <SkillTag>{tag}</SkillTag>
                  ))}
                </SkillTagContainer>

              </>
            )
          })}
        </InfoContainer>
      </OtherProjectInnerWrapper>
    </OtherProjectOuterWrapper>
  );
};

export const OtherProjectOuterWrapper = styled.div`
  background-color: var(--nude);
  height: 70vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const OtherProjectInnerWrapper = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  width: 80vw;
  max-width: 900px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    font-family: Montserrat;
    color: #293a4f;
    font-size: 22px;
  }

  a {
    text-decoration: none;
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const SkillTag = styled.p`
font-family: "Roboto", sans-serif;
color: #ffff;
border-radius: 3px;
background-color: #293a4f;
display: inline;
font-size: 14px;
font-weight: 700;
letter-spacing: 1px;
margin-right: 10px;
padding: 3px 5px;
`;

export const SubTitle = styled.a`
  color: var(--blue);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;


  :hover {
    text-decoration: underline;
  }
`;

export const SubParagraph = styled.p`
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  texta-align: left;

`;
