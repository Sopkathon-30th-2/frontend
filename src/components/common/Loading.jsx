import React from 'react';
import styled from 'styled-components';

function Loading() {
  return <Styled.Root>로딩중 . . . </Styled.Root>;
}

export default Loading;

const Styled = {
  Root: styled.div`
    margin-top: 5rem;
    font-size: 4rem;
  `,
};
