import React, { Suspense, useState, useMemo } from 'react';
import styled from 'styled-components';
import HeaderLogo from '../components/common/Header';
import CleanMail from '../components/cleanEmail/CleanMail';
import NoticeMailCount from '../components/cleanEmail/NoticeMailCount';
import Loading from '../components/common/Loading';
import ErrorBoundary from '../components/common/ErrorBoundary';
import ErrorComponent from '../components/common/ErrorComponent';
import { fetchMailCountData } from '../lib/getUserMailData';
import { fetchDeleteMailData } from '../lib/deleteMail';

function CleanMailPage() {
  const [resetKey, setResetKey] = useState(true);

  return (
    <Styled.Root>
      <HeaderLogo />
      <ErrorBoundary renderFallback={({ error }) => <ErrorComponent error={error} />} resetKey={resetKey}>
        <Suspense fallback={<Loading />}>
          <NoticeMailCount resource={fetchMailCountData()} />
          <CleanMail />
        </Suspense>
      </ErrorBoundary>
    </Styled.Root>
  );
}

export default CleanMailPage;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  MailTitle: styled.img``,
};
