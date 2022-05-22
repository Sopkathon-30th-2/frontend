import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sample from '../pages/Sample';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
import CleanMailPage from '../pages/CleanMailPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cleanmail" element={<CleanMailPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
