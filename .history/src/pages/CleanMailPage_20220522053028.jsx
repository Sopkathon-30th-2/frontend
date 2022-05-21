import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../components/common/Header';

const HeaderTitle = styled.div`
  font-family: 'Gmarket sans Bold';
  color: #363469;
  text-align: center;
  margin-top: 25.7rem;
  font-size: 3.2rem;
`;

function CleanMailPage() {
  return (
    <>
      <HeaderLogo />
      <HeaderTitle>000개의 메일이 지구에 넘쳐흐르고 있어요!</HeaderTitle>
    </>
  );
}

export default CleanMailPage;
