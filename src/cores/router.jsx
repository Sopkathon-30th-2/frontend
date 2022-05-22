import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sample from '../pages/Sample';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
import CleanMailPage from '../pages/CleanMailPage';
import Loading from '../components/common/Loading';
import ErrorBoundary from '../components/common/ErrorBoundary';
import ErrorComponent from '../components/common/ErrorComponent';

function Router() {
  const [resetKey, setResetKey] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cleanmail" element={<CleanMailPage />} />
        <ErrorBoundary renderFallback={({ error }) => <ErrorComponent error={error} />} resetKey={resetKey}>
          <Suspense fallback={<Loading />}>
            <Route path="/result" element={<ResultPage />} />
          </Suspense>
        </ErrorBoundary>
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
