import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import { Map } from "react-kakao-maps-sdk";

const StoreHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 200px;
  }
`;

const StoreTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .store_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .store_title {
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

function Store() {
  return (
    <>
      <StoreHeader>
        <img src={process.env.PUBLIC_URL + "/images/store/mainImg.png"} alt="mainImg" />
      </StoreHeader>
      <StoreTitle>
        <div className='store_in'>
          <div className='store_title'>
            <h1>매장 안내</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> STORE <span>&gt;</span>
              <span className="current">매장찾기</span>
            </div>
          </div>
          <p>전국 드롭탑 매장의 위치와 정보를 확인하실 수 있습니다.</p>
        </div>
      </StoreTitle>
      <Map
        id='map'
        center={{
          lat: 35.92018161540978,
          lng: 128.61061273680292,
        }}
        style={{
          width: "1000px",
          height: "500px",
        }}
        level={2}
      />
    </>
  );
}

export default Store;