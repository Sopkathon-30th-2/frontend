import React, { useEffect, useState, Suspense } from 'react';
import styled from 'styled-components';
import HeaderLogo from '../components/common/Header';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import resultImg from '../assets/image/resultImg.png';
import axios from 'axios';
import ErrorComponent from '../components/common/ErrorComponent';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Loading from '../components/common/Loading';

function ResultPage() {
  const [userCount, setUserCount] = useState('');
  const [resetKey, setResetKey] = useState('');

  useEffect(() => {
    async function fetchUserCount() {
      const { data } = await axios.get('https://asia-northeast3-sopkathon-a7a6f.cloudfunctions.net/app/user');
      setUserCount(data.data);
    }
    fetchUserCount();
  }, []);

  return (
    <ErrorBoundary renderFallback={({ error }) => <ErrorComponent error={error} />} resetKey={resetKey}>
      <Suspense fallback={<Loading />}>
        <Container>
          <HeaderLogo />
          <H1>현재 {userCount}명의 히어로가 지구를 지키고 있어요</H1>
          <H2>메일함이 깔끔하게 정리되었습니다!</H2>
          <H2>앞으로도 E-레인저로 멋진 활동을 기대할게요!</H2>
          <ResultImg src={resultImg} />
          <CopyToClipboard text={window.location.href} onCopy={() => alert('링크가 클립보드에 복사되었어요!')}>
            <StyledButton type="button">공유하기</StyledButton>
          </CopyToClipboard>
        </Container>
      </Suspense>
    </ErrorBoundary>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 0;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  width: 288px;
  height: 90px;
  background-color: #363469;
  border: 2px solid #000000;
  border-radius: 88px;
  font-family: GmarketSansTTFMedium;
  font-size: 32px;
  line-height: 1;
  color: #ffb800;
  padding-top: 29px;
  padding-bottom: 29px;
`;

const ResultImg = styled.img`
  margin-top: 38px;
  margin-bottom: 56px;
  width: 1200px;
  height: 598px;
`;

const H1 = styled.h1`
  font-family: GmarketSansTTFMedium;
  font-size: 32px;
  line-height: 1;
  margin-top: 43px;
  margin-bottom: 58px;
`;

const H2 = styled.h2`
  font-family: GmarketSansTTFBold;
  font-size: 40px;
  line-height: 1;
  white-space: pre-wrap;
  & + & {
    margin-top: 12px;
  }
`;

export default ResultPage;
