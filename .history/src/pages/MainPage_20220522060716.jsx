import React from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import Frame from '../assets/image/Frame.png';
import Logo from '../assets/image/MainPageLogo.jpg';

const TitleContainer = styled.img`
  position: relative;
`;

const BackgroundIMG = styled.img`
  width: 119.4rem;
  height: 423.6rem;
  margin-left: 36.6rem;
  margin-top: -1.8rem;
  z-index: 4;
`;

const MainPageLogo = styled.img`
  z-index: 1;
  width: 60rem;
  height: 37.2rem;
`;

function MainPage() {
  const clientId = '875173824142-lrkt4j1fp9s1vvvstrtocv1bdpsk2v0u.apps.googleusercontent.com';
  const onSuccess = async (response) => {
    console.log(response);
  };
  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <TitleContainer></TitleContainer>
      <BackgroundIMG src={Frame} />
      <MainPageLogo src={Logo} />
      <GoogleLogin
        buttonText="구글계정으로 로그인"
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
}

export default MainPage;
