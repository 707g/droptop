import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

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

const LoginContainer = styled.div`
  width: 952px;
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const LoginBox = styled.div`
  width: 952px;
  margin: 0 auto ;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;

  h2 {
    color: #0A2986;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  label {
    width: 20px;
    height: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    white-space: nowrap;

    input {
      margin: 0 5px 0 0;
    }
  }

  button {
    width: 100%;
    padding: 12px;
    background: #0A2986;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #082066;
    }
  }

  .link {
    margin-bottom: 20px;
    color: #0A2986;
    font-size: 14px;

    a {
      color: #0A2986;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
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
      <LoginContainer>
        <LoginBox>
          <h2>Member Login</h2>
          <input id='id' placeholder='아이디' /><br />
          <input id='password' type='password' placeholder='비밀번호' /><br />
          <label>
            <input type='checkbox' />아이디 저장
          </label>
          <div className='link'>
            <a href='#findIdPw'>아이디/비밀번호 찾기</a>
          </div>
          <button>로그인</button>
        </LoginBox>
        <LoginBox>
          <h2>아직 회원이 아니십니까?</h2>
          <p>DROPTOP의 회원이 되면, 이벤트 참여, 커뮤니티 활동 등<br />다양한 혜택을 받을 수 있습니다.</p>
          <button>
            <Link to="/join" style={{textDecoration: "none", color: "inherit"}}>
              회원가입하기
            </Link>
          </button>
        </LoginBox>
      </LoginContainer>
    </>
  );
}

export default LoginPage;