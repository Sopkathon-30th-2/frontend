import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import mailTitle from '../../assets/image/mail_title.svg';
import CalendarIcon from '../../assets/icon/CalendarIcon.svg';
import CustomCalendar from './CustomCalendar';

function CleanMail() {
  const [toggleClick, setToggleClick] = useState(false);
  const { startDate, endDate } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    return {
      startDate: new Date(now.setMonth(now.getMonth() - 3)),
      endDate: new Date(),
    };
  }, []);
  const [[startMonth, endMonth], onChange] = useState([startDate, endDate]);
  const onClickHandler = () => {
    setToggleClick((prev) => !prev);
  };
  useEffect(() => {
    console.log('start. end', startMonth, endMonth);
  }, [startMonth, endMonth]);
  return (
    <Styled.Root>
      <Styled.MailTitle src={mailTitle} alt="정리할 기간 설정하기" />
      <Styled.Description>해당 기간동안 읽지 않은 메일들과 휴지통을 정리할 거에요</Styled.Description>
      <Styled.Form>
        <Styled.Input />
        <Styled.CalendarIcon src={CalendarIcon} alt="캘린더 아이콘" onClick={onClickHandler} />
      </Styled.Form>
      {toggleClick && <CustomCalendar startMonth={startMonth} endMonth={endMonth} onChange={onChange} />}
      <Styled.Button>e 메일함 정리하기</Styled.Button>
    </Styled.Root>
  );
}

export default CleanMail;

const Styled = {
  Root: styled.div`
    width: 100%;
    background: #ecebf9;
    height: 85.2rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  `,
  Description: styled.p`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.4rem;
    /* identical to box height */

    text-align: center;

    color: #000000;
  `,
  MailTitle: styled.img`
    margin-top: 16.5rem;
    margin-bottom: 2rem;
  `,
  Form: styled.form`
    margin-top: 49px;
    width: 702px;
    height: 92.44px;
    /* background: #ffffff; */
    /* eraser_puple1 */

    border: none;
    /* border-radius: 121.333px;
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 3.6rem;
    line-height: 36px; */
    /* identical to box height */

    color: #000000;
    position: relative;
  `,
  Input: styled.input`
    /* margin-top: 49px; */
    width: 702px;
    height: 92.44px;
    background: #ffffff;
    position: absolute;
    padding-left: 58px;
    padding-right: 58px;
    padding-bottom: 20px;
    padding-top: 20px;
    /* eraser_puple1 */

    border: 4.33333px solid #363469;
    border-radius: 121.333px;

    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 3.6rem;
    line-height: 36px;
    /* identical to box height */
  `,
  CalendarIcon: styled.img`
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    left: 88%;
    top: 20%;
  `,
  Button: styled.button`
    margin-top: 92.56px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 419px;
    height: 90px;

    /* eraser_puple1 */

    background: #363469;
    border: 2px solid #000000;
    border-radius: 88px;

    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    /* identical to box height */

    /* eraser_yellow */

    color: #ffb800;
  `,
};
