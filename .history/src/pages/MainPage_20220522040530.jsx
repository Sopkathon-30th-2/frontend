import React from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

const Header = {
  Container: styled.div``,
  Title: styled.h1``,
  Content: styled.p1``,
};
const MainContents = {
  Container: styled.div``,
  Image: styled.img``,
  Content: styled.p1``,
};
const HowToUse = {
  Container: styled.div``,
  Title: styled.h1``,
  Number: styled.h1``,
  Content: styled.p1``,
};
const LoginSector = {
  Container: styled.div``,
  Title: styled.h1``,
};

function MainPage() {
  const clientId = '875173824142-lrkt4j1fp9s1vvvstrtocv1bdpsk2v0u.apps.googleusercontent.com';
  const onSuccess = async (response) => {
    console.log(response);
  };
  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        buttonText="구글계정으로 로그인"
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </d>
  );
}

export default MainPage;
