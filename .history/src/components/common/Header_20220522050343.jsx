import styled from 'styled-components';
import logo from '../../assets/image/logo.svg';

const HeaderLogo = {
  Logo: styled.img`
    width: 148px;
    height: 86.17px;
    align-items: center;
    top: 0;
    transform: translateX(50%);
  `,
};

function Header() {
  return <HeaderLogo.Logo src={logo} />;
}

export default Header;
