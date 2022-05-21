import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const clientId = '875173824142-lrkt4j1fp9s1vvvstrtocv1bdpsk2v0u.apps.googleusercontent.com';

class Googlebutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      provider: '',
    };
  }
  // Google Login
  responseGoogle = (res) => {
    console.log(res);
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <Container>
        <GoogleLogin
          clientId={clientId}
          buttonText="구글로 로그인하기"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 200px;
  height: 20px;
  flex-flow: column wrap;
`;

export default Googlebutton;
