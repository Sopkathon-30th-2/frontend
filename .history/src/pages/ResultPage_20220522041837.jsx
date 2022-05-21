import React from 'react';
import styled from 'styled-components';
import logo from '../assets/image/lo-go.svg';

const Header = {
  TitleLogo: styled.img`
    width: 148px;
    height: 86.17px;
  `,
};

function ResultPage() {
  return (
    <>
      <Header.TitleLogo />
    </>
  );
}

export default ResultPage;
