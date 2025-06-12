import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import { Map, MapMarker } from "react-kakao-maps-sdk";

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

const ContentArea = styled.div`
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
  padding: 40px 0 80px;
  display: flex;
  gap: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .mapArea {
    width: 100%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ccc;
  }

  .searchBox {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;

    select, button {
      width: 100%;
      padding: 8px;
      margin-bottom: 8px;
    }

    button {
      background-color: #0A2986;
      color: white;
      border: none;
    }
  }

  .inputBox {
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;

    input {
      flex: 1;
      padding: 8px;
      border: none;
    }

    button {
      width: 50px;
      background-color: #0A2986;
      color: white;
      border: none;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  background-color: #e6f0fb;
  padding: 16px;
  border-radius: 8px;
  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 12px;
      border-bottom: 1px solid #ccc;
      text-align: left;
    }

    th {
      background-color: #d3e6fa;
      color: #0A2986;
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

      <ContentArea>
        <Left>
          <div className="mapArea">
            <Map
              center={{ lat: 35.8714, lng: 128.6014 }}
              style={{ width: "100%", height: "100%" }}
              level={13}
            >
              <MapMarker position={{ lat: 35.8714, lng: 128.6014 }}>
                <div style={{ color: "#000" }}>중앙지점</div>
              </MapMarker>
            </Map>
          </div>

          <div className="searchBox">
            <select>
              <option>시/도(전체)</option>
              <option>서울</option>
              <option>부산</option>
            </select>
            <select>
              <option>시/군/구(전체)</option>
              <option>강남구</option>
              <option>해운대구</option>
            </select>
            <button>검색하기</button>
          </div>

          <div className="inputBox">
            <input placeholder="검색어를 입력하세요" />
            <button>🔍</button>
          </div>
        </Left>

        <Right>
          <table>
            <thead>
              <tr>
                <th>매장명</th>
                <th>매장 위치</th>
                <th>매장 번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>드롭탑 강남점</td>
                <td>서울 강남구 테헤란로</td>
                <td>02-1234-5678</td>
              </tr>
              <tr>
                <td>드롭탑 해운대점</td>
                <td>부산 해운대구 우동</td>
                <td>051-987-6543</td>
              </tr>
            </tbody>
          </table>
        </Right>
      </ContentArea>
    </>
  );
}

export default Store;
