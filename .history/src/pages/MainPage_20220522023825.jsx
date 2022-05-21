import React from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

function MainPage() {
  return (
    <div>
      <GoogleLogin clientId={clientId} responseType={'id_token'} onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
}

export default MainPage;
