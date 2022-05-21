import StyledComponents from 'styled-components';
import styled from 'styled-components';
import logo from '../../assets/image/logo.svg';

function Header() {
  return (
    <HeaderLogo.Root>
      <HeaderLogo.Logo src={logo} />
    </HeaderLogo.Root>
  );
}

export default Header;

const HeaderLogo = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  Logo: styled.img`
    width: 148px;
    height: 86.17px;
    /* position: absolute; */
    /* align-items: center; */
    /* top: 0;
    left: 50%;
    transform: translateX(-50%); */
    margin-top: 85px;
  `,
};
