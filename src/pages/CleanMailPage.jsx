import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../components/common/Header';
import CleanMail from '../components/cleanEmail/CleanMail';
import NoticeMailCount from '../components/cleanEmail/NoticeMailCount';

function CleanMailPage() {
  return (
    <Styled.Root>
      <HeaderLogo />
      <NoticeMailCount />
      <CleanMail />
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
