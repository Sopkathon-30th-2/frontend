import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../components/common/ErrorBoundary';
import ErrorComponent from '../components/common/ErrorComponent';
import Loading from '../components/common/Loading';
import { fetchData } from '../lib';
const GetDataTest = React.lazy(() => import('../components/GetDataTest'));

function MainPage() {
  const [resetKey, setResetKey] = useState('');
  return (
    <StyledRoot>
      <ErrorBoundary renderFallback={({ error }) => <ErrorComponent error={error} />} resetKey={resetKey}>
        <Suspense fallback={<Loading />}>
          <GetDataTest resoure={fetchData()} />
        </Suspense>
      </ErrorBoundary>
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
