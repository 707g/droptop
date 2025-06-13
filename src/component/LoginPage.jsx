import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const LoginHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 952px;
    height: 200px;
  }
`;

const LoginTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .event_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .event_title {
      width: 952px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-weight: 600;
        color: #0A2986;
      }

      .nav {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #999;

        svg {
          margin-right: 4px;
          font-size: 18px;
          vertical-align: middle;
        }

        .current {
          color: #0A2986;
          font-weight: bold;
        }

        span {
          margin: 0 4px;
        }
      }
    }
  }
`;

function LoginPage() {
  return (
    <>
      <LoginHeader>
        <img src={process.env.PUBLIC_URL + "/images/login/mainImg.png"} alt="mainImg" />
      </LoginHeader>
      <LoginTitle>
        <div className='event_in'>
          <div className='event_title'>
            <h1>로그인</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span>
              <span className="current">로그인</span>
            </div>
          </div>
          <p>회원님의 아이디와 비밀번호를 확인 후 로그인을 진행해주세요.</p>
        </div>
      </LoginTitle>
    </>
  );
}

export default LoginPage;