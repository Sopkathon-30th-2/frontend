import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../components/common/Header';
import CustomCalendar from '../components/cleanEmail/CustomCalendar';

const HeaderTitle = styled.div`
  color: #363469;
  text-align: center;
  margin-top: 25.7rem;
  font-size: 3.2rem;
`;

function CleanMailPage() {
  return (
    <div>
      <HeaderLogo />
      <HeaderTitle>000개의 메일이 지구에 넘쳐흐르고 있어요!</HeaderTitle>
      <CustomCalendar />
    </div>
  );
}

export default CleanMailPage;
