import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const PranchiseHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 200px;
  }
`;

const PranchiseTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .pranchise_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .pranchise_title {
      width: 952px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-weight: 600;
        color: #003366;
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
          color: #003366;
          font-weight: bold;
        }

        span {
          margin: 0 4px;
        }
      }
    }
  }
`;

function Pranchise() {
  return (
    <>
      <PranchiseHeader>
        <img src={process.env.PUBLIC_URL + "/images/pranchise/mainImg.png"} alt="mainImg" />
      </PranchiseHeader>
      <PranchiseTitle>
        <div className='pranchise_in'>
          <div className='pranchise_title'>
            <h1>창업 안내</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> PRANCHISE <span>&gt;</span>
              <span className="current">창업 안내</span>
            </div>
          </div>
          <p>드롭탑 가맹점 개설절차 및 개설조건을 알려드립니다.</p>
        </div>
      </PranchiseTitle>
    </>
  );
}

export default Pranchise;