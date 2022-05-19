import React from 'react';
import styled from 'styled-components';

function MainPage() {
  return (
    <StyledRoot>
      <p>다인 나희 웰컴~~~~~~</p>
    </StyledRoot>
  );
}

export default MainPage;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  width: 100%;
  height: 100%;
`;
