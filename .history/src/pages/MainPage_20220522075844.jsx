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
  color: #363469;
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

const HowToUseFirst = styled.div`
  text-align: center;
  padding-top: 0.8rem;

  font-size: 3.2rem;
  margin-left: 52.8rem;
  margin-top: 307.8rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 24px;
  color: #ffb800;
  background-color: #363469;
  position: absolute;
`;
const HowToUseSecond = styled.div`
  font-size: 3.2rem;
  text-align: center;
  padding-top: 0.8rem;

  margin-left: 93.6rem;
  margin-top: 307.8rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 24px;
  color: #ffb800;
  background-color: #363469;
  position: absolute;
`;
const HowToUseThird = styled.div`
  text-align: center;
  padding-top: 0.8rem;
  font-size: 3.2rem;
  margin-left: 134.4rem;
  margin-top: 307.8rem;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 24px;
  color: #ffb800;
  background-color: #363469;
  position: absolute;
`;

const RoutineFirst = styled.div`
  text-align: center;
  padding-top: 0.8rem;
  font-size: 3.2rem;
  margin-left: 45.6rem;
  margin-top: 352rem;
  width: 19.3rem;
  height: 3.2rem;
  color: #363469;
  position: absolute;
`;
const RoutineSecond = styled.div`
  text-align: center;
  padding-top: 0.8rem;
  font-size: 3.2rem;
  margin-left: 84.3rem;
  margin-top: 352.1rem;
  width: 23.4rem;
  height: 3.2rem;
  color: #363469;
  position: absolute;
`;
const RoutineThird = styled.div`
  text-align: center;
  padding-top: 0.8rem;
  font-size: 3.2rem;
  margin-left: 130.2rem;
  margin-top: 352.1rem;
  width: 13.3rem;
  height: 3.2rem;
  color: #363469;
  position: absolute;
`;

const Googlebox = styled.div`
  position: absolute;
  background-color: #f2eeff;
  width: 192rem;
  height: 51.2rem;
  margin-top: 372.3rem;
  margin-left: 0;

  & .google-login {
    position: absolute;
    bottom: 30%;
    right: 50%;
    transform: translateX(50%);
    width: 52.6rem;
    height: 9.9rem;
    border-radius: 500px;
  }
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
      <HowToUseFirst>1</HowToUseFirst>
      <HowToUseSecond>2</HowToUseSecond>
      <HowToUseThird>3</HowToUseThird>
      <RoutineFirst>G메일 로그인</RoutineFirst>
      <RoutineSecond>정리할 기간 설정</RoutineSecond>
      <RoutineThird>메일 정리</RoutineThird>
      <GoogleTitle>E:레인저 합류하기</GoogleTitle>
      <Googlebox>
        <GoogleLogin
          buttonText="Google로 계속하기"
          clientId={clientId}
          responseType={'id_token'}
          onSuccess={onSuccess}
          onFailure={onFailure}
          className="google-login"
          // style={style}
        />
      </Googlebox>
    </>
  );
}

export default MainPage;
