import React from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';

function MainPage() {
  const clientId = 'OAuth Web Client ID';
  const onSuccess = async (response) => {
    console.log(response);
  };
  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin clientId={clientId} responseType={'id_token'} onSuccess={onSuccess} onFailure={onFailure} />
    </div>
  );
}

export default MainPage;
