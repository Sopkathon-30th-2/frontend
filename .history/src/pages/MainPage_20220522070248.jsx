import React from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import Frame from '../assets/image/Frame.png';
import Logo from '../assets/image/MainPageLogo.png';

const BackgroundIMG = styled.img`
  width: 119.4rem;
  height: 423.6rem;
  margin-left: 36.6rem;
  margin-top: -1.8rem;
  position: absolute;
  z-index: 2;
`;

const MainPageLogo = styled.img`
  width: 60rem;
  height: 37.2rem;
  margin-top: 15.6rem;
  margin-left: 66rem;
  position: absolute;
  z-index: 3;
`;

const HeaderContent = styled.div`
  position: absolute;
  width: 93.4rem;
  height: 7.4rem;
  letter-spacing: -0.1rem;
  margin-top: 59.6rem;
  margin-left: 49.3rem;
  font-size: 3.2rem;
  text-align: center;
  z-index: 1;
`;
const MainContentFirst = styled.div`
  position: absolute;
  width: 72.3rem;
  height: 7.4rem;
  margin-top: 167.3rem;
  margin-left: 59.9rem;
  font-size: 3.2rem;
  text-align: center;
  z-index: 1;
  color: #363469;
`;
const MainContentSecond = styled.div`
  position: absolute;
  width: 52.6rem;
  height: 7.4rem;
  margin-top: 263.2rem;
  margin-left: 69.7rem;
  font-size: 3.2rem;
  text-align: center;
  z-index: 1;
  color: #363469;
`;

const HowToUseTitle = styled.div`
  position: absolute;
  width: 43.3rem;
  height: 4rem;
  margin-top: 292.3rem;
  margin-left: 74.3rem;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
`;

const GoogleTitle = styled.div`
  position: absolute;
  width: 44.8rem;
  height: 4rem;
  margin-top: 379.8rem;
  margin-left: 73.6rem;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
`;

const Googlebtn = styled.div`
  position: absolute;
  width: 44.8rem;
  height: 40rem;
  margin-top: 378.9rem;
  margin-left: 73.6rem;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
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
      <div>
        <MainPageLogo src={Logo} />
      </div>
      <div>
        <BackgroundIMG src={Frame} />
      </div>
      <HeaderContent>
        지구의 e존층을 통해 쓸모 없는 인터넷 기록들이 넘쳐 흐르고 있어요. <br /> 지구가 E:레이저들에게 도움을 요청하고
        있어요
      </HeaderContent>
      <MainContentFirst>
        아파하는 지구를 위해 <br /> 오래된 메일함을 정리할 새로운 E:레인저가 필요해요
      </MainContentFirst>
      <MainContentSecond>
        E-레인저가 되어 e메일함을 정리하고
        <br /> 지구를 지켜봐요
      </MainContentSecond>
      <HowToUseTitle>어떻게 지구를 구할까요?</HowToUseTitle>
      <GoogleTitle>E:레인저 합류하기</GoogleTitle>
      <GoogleLogin
        buttonText="구글계정으로 로그인"
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
        style={Googlebtn}
      />
    </>
  );
}

export default MainPage;
