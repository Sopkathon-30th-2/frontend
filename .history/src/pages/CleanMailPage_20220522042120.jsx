import React from 'react';
import styled from 'styled-components';

const Header = {
  Logo: styled.img`
    width: 148px;
    height: 68.17px;
  `,
};

function CleanMailPage() {
  return (
    <>
      <Header.Logo />
    </>
  );
}

export default CleanMailPage;
