import React, { useState } from 'react';
import styled from 'styled-components';
import XIcon from '../../assets/icon/XIcon.svg';
import ColonIcon from '../../assets/icon/ColonIcon.svg';

function NoticeMailCount({ resource }) {
  const [data, setData] = useState(resource.read());

  return (
    <>
      <Styled.HeaderTitle>{data?.data?.data}개의 메일이 지구에 넘쳐흐르고 있어요!</Styled.HeaderTitle>
      <Styled.BoxWrapper>
        <Styled.FirstBox>
          <div className="circle">
            <span className="title">{data?.data?.data}</span>
            <span className="sub-title">개</span>
          </div>
          <p className="description">오래된 메일 개수</p>
        </Styled.FirstBox>
        <img src={XIcon} alt="X 아이콘" />
        <Styled.SecondBox>
          <div className="circle">
            <span className="title">4</span>
            <span className="sub-title">그램</span>
          </div>
          <p className="description">메일 한 개가 뿜는 온실가스</p>
        </Styled.SecondBox>
        <img src={ColonIcon} alt="= 아이콘" />
        <Styled.ThirdBox>
          <div className="circle">
            <span className="title">{data?.data?.data * 4}</span>
            <span className="sub-title">그램</span>
          </div>
          <p className="description">오래된 메일이 뿜는 온실가스</p>
        </Styled.ThirdBox>
      </Styled.BoxWrapper>
    </>
  );
}

export default NoticeMailCount;

const Styled = {
  HeaderTitle: styled.h1`
    color: #363469;
    text-align: center;
    margin-top: 8.5rem;
    font-size: 3.2rem;
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 500;
    line-height: 3.2em;
    color: #363469;
  `,
  BoxWrapper: styled.section`
    margin-top: 4.6rem;
    margin-bottom: 14rem;
    display: flex;
    .description {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 24px;
      text-align: center;
      color: #000000;
      margin-top: 4.9rem;
    }
  `,
  FirstBox: styled.div`
    .circle {
      border-radius: 50%;
      width: 28.2rem;
      height: 28.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #363469;
    }
    margin-right: 2.6rem;
    .title {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 50px;
      line-height: 50px;
      /* identical to box height */

      text-align: center;

      /* eraser_yellow */

      color: #ffb800;
      margin-right: 6px;
    }
    .sub-title {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      /* eraser_yellow */

      color: #ffb800;
    }
  `,
  SecondBox: styled.div`
    .circle {
      border-radius: 50%;
      width: 28.2rem;
      height: 28.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #e15f5f;
    }
    margin-left: 2.6rem;
    margin-right: 2.6rem;
    .title {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 50px;
      line-height: 50px;
      /* identical to box height */

      text-align: center;

      color: #e15f5f;
      margin-right: 6px;
    }
    .sub-title {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      color: #e15f5f;
    }
  `,
  ThirdBox: styled.div`
    .circle {
      border-radius: 50%;
      width: 28.2rem;
      height: 28.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e15f5f;
    }
    margin-left: 2.6rem;
    .title {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 50px;
      line-height: 50px;
      /* identical to box height */

      text-align: center;

      /* eraser_yellow */

      color: #ffb800;
      margin-right: 6px;
    }
    .sub-title {
      font-family: 'Gmarket Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      /* identical to box height */

      text-align: center;

      /* eraser_yellow */

      color: #ffb800;
    }
  `,
};
