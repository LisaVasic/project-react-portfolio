import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/header_image.jpg';
import heroLinkedin from '../assets/linkedin_icon.png';
import heroGithub from '../assets/github_icon.png';
import profileImage from '../assets/profile_image.jpeg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href="https://www.linkedin.com/in/lisa-johansson-ba51a465/" target="_blank" rel="noreferrer">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href="https://github.com/LisaVasic" target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
      </HeaderIcons>
      <HeaderTitle>
        <h3>PORTFOLIO: <span>LISA JOHANSSON</span></h3>
        <h1>frontend</h1>
        <h1>developer</h1>
        <h4>+ graphic designer</h4>
      </HeaderTitle>
      <ProfileImage>
        <img src={profileImage} alt="Profile" />
      </ProfileImage>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  background-image: url(${heroImage});
  width: 100%;
  height: 500px;
  background-position: 20%;
  background-size: cover;
  position: relative;
`;

export const HeaderIcons = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  
  img{
    height: 25px;
    width: 25px;
    }

  a {
    background-color: rgba(41, 58, 79, 0.6);
    width: 45px;
    height: 45px;
    padding: 5px;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a:hover{
    background-color: rgb(41, 58, 79);
  }

@media (min-width: 668px) and (max-width: 1023px){
    width: 160px;
    height: 70px;
}

@media (min-width: 1024px){
  right: 17%;
  top: 10%;
  width: 200px;
  height: 70px;

  a {
    width: 60px;
    height: 60px;
  }
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  line-height: 15px;

  h3 {
    font-size: 15px;
    font-weight: 400;
    font-family: Roboto;
  }
  
  span {
    font-weight: 700; 
  }

  h1 {
    font-size: 45px;
    display: block;
  }

  h4 {
    font-size: 25px;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h3 {
      font-size: 20px;
    }

    h1 {
      font-size: 60px;
    }

    h4 {
        font-size: 30px;
      }
  }

  @media (min-width: 1024px) {
    left: 17%;
    top: 20%;
    line-height: 20px;

    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 70px;
    }

    h4 {
        font-size: 30px;
      }
  }
`;

export const ProfileImage = styled.div`
  img {
    object-fit: cover;
    object-position: top center;
    border-radius: 50%;
    border: 4px solid white;
    width: 170px;
    height: 170px;
    position: absolute;
    bottom: -5%;
    right: 10%;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 270px;
      height: 270px;
      bottom: -10%;
      right: 17%;
    }
  }
`;
