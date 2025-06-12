import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const FranchiseHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 952px;
    height: 200px;
  }
`;

const FranchiseTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .franchise_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .franchise_title {
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

const FranchiseContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  img:last-of-type {
    margin-bottom: 80px;
  }
`;

function Franchise() {
  return (
    <>
      <FranchiseHeader>
        <img src={process.env.PUBLIC_URL + "/images/franchise/mainImg.png"} alt="mainImg" />
      </FranchiseHeader>
      <FranchiseTitle>
        <div className='franchise_in'>
          <div className='franchise_title'>
            <h1>창업 안내</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> PRANCHISE <span>&gt;</span>
              <span className="current">창업 안내</span>
            </div>
          </div>
          <p>드롭탑 가맹점 개설절차 및 개설조건을 알려드립니다.</p>
        </div>
      </FranchiseTitle>
      <FranchiseContent>
        <img src={process.env.PUBLIC_URL + "/images/franchise/franchise01.jpg"} alt="franchise01" />
        <img src={process.env.PUBLIC_URL + "/images/franchise/franchise02.png"} alt="franchise02" />
      </FranchiseContent>
    </>
  );
}

export default Franchise;