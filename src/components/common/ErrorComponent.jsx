import React from 'react';
import styled from 'styled-components';

function ErrorComponent({ error }) {
  console.log('>>>error', error);
  return <Styled.Root>일시적인 네트워크 오류로 데이터를 불러올 수 없습니다.</Styled.Root>;
}

export default ErrorComponent;

const Styled = {
  Root: styled.div`
    margin-top: 5rem;
    font-size: 4rem;
  `,
};
