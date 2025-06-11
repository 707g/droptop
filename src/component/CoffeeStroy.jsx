import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const CoffeeStoryHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 200px;
  }
`;

const CoffeeStoryTitle = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;

  .coffeestory_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .coffeestory_title {
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

const CoffeeStoryContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

function CoffeeStroy() {
  return (
    <>
      <CoffeeStoryHeader>
        <img src={process.env.PUBLIC_URL + "/images/coffeestory/mainImg.png"} alt="mainImg" />
      </CoffeeStoryHeader>
      <CoffeeStoryTitle>
        <div className='coffeestory_in'>
          <div className='coffeestory_title'>
            <h1>커피 이야기</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> 925커피 <span>&gt;</span>
              <span className="current">커피이야기</span>
            </div>
          </div>
          <p>
            드롭탑 큐그레이더들의 끊임없는 노력과 집념으로 만들어진 결실,<br />
            드롭탑만의 완벽한 925 커피를 소개합니다.
          </p>
        </div>
      </CoffeeStoryTitle>
      <CoffeeStoryContent>
        <img src={process.env.PUBLIC_URL + "/images/coffeestory/coffeestory.png"} alt="coffeestory" />
      </CoffeeStoryContent>
    </>
  );
}

export default CoffeeStroy;
