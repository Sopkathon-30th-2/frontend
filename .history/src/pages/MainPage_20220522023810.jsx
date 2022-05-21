import React from 'react';
import styled from 'styled-components';

function MainPage() {
  return (
    <div>
      <GoogleLogin clientId={clientId} responseType={'id_token'} onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
}

export default MainPage;
