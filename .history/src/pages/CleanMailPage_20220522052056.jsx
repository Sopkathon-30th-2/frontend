import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../components/common/Header';

const HeaderTitle = styled.div`
  color: 363469;
  text-align: center;
`;

function CleanMailPage() {
  return (
    <>
      <HeaderLogo />
      <>000개의 메일이 지구에 넘쳐흐르고 있어요!</>
    </>
  );
}

export default CleanMailPage;
