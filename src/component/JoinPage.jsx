import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const JoinHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 952px;
    height: 200px;
  }
`;

const JoinTitle = styled.div`
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

const Layout = styled.div`
  box-sizing: border-box;
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 80px;
  padding: 20px;
  border-radius: 1.5px;
  background: #f5f5f5;
  box-shadow: 0 0 12px rgb(0 0 0 / 0.1);
  text-align: left;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 0 0;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  box-sizing: border-box;

  label {
    font-size: 20px;
    color: #555;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 12px 16px;
    font-size: 17px;
    border-radius: 0.75rem;
    border: 1px solid #ccc;
    background-color: #fff;

    &:focus {
      outline: none;
      border: 1px solid #0A2986;
    }
  }
`;


const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  

  .checkbox {
    display: flex;
    align-items: center;

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #555;
      margin-bottom: 0;
    }
  }
`;

const Notice = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 20px;
    color: #888;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 12px 32px;
    background-color: #0A2986;
    color: #fff;
    font-size: 28px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #13339C;
    }
  }
`;

function JoinPage() {
  return (
    <>
      <JoinHeader>
        <img src={process.env.PUBLIC_URL + "/images/join/mainImg.png"} alt="mainImg" />
      </JoinHeader>
      <JoinTitle>
        <div className='event_in'>
          <div className='event_title'>
            <h1>회원가입</h1>
            <div className='nav'>
              <IoMdHome />
              HOME <span>&gt;</span> <span className='current'>회원가입</span>
            </div>
          </div>
          <p>간단한 정보입력을 통한 회원가입을 진행합니다.</p>
        </div>
      </JoinTitle>
      <Layout>
        <InputGroup>
          <Input>
            <label htmlFor='username'>아이디</label>
            <input id='username' type='text' placeholder='6~10자 영문, 숫자' />
          </Input>
          <Input>
            <label htmlFor='password'>비밀번호</label>
            <input id='password' type='password' placeholder='8~12자 영문, 숫자, 특수문자' />
          </Input>
          <Input>
            <label htmlFor='confirm'>비밀번호 확인</label>
            <input id='confirm' type='password' placeholder='8~12자 영문, 숫자, 특수문자' />
          </Input>
          <Input>
            <label htmlFor='name'>이름</label>
            <input id='name' type='text' />
          </Input>
          <Input>
            <label htmlFor='email'>이메일</label>
            <input id='email' type='email' />
          </Input>
          <Input>
            <label htmlFor='phone'>휴대전화</label>
            <input id='phone' type='text' />
          </Input>
        </InputGroup>
        <CheckboxGroup>
          <div className='checkbox'>
            <input id='sms' type='checkbox' />
            <p>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</p>
          </div>
          <div className='checkbox'>
            <input id='age14' type='checkbox' />
            <p>14세 미만입니다.</p>
          </div>
        </CheckboxGroup>
        <Notice>
          <p>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입이 가능합니다.</p>
        </Notice>
        <Button>
          <button>회원가입</button>
        </Button>
      </Layout>
    </>
  );
}

export default JoinPage;

