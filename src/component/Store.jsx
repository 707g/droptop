import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const StoreHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 952px;
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

    th {
      padding: 7px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      background-color: #d3e6fa;
      color: #0A2986;
    }

    td {
      padding: 7px;
      font-size: 15px;
      border-bottom: 1px solid #cccccc;
      text-align: left;
    }
  }
`;

const cityOptions = {
  서울특별시: [
    "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구",
    "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구",
    "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구",
    "종로구", "중구", "중랑구"
  ],
  부산광역시: [
    "강서구", "금정구", "기장군", "남구", "동구", "동래구", "부산진구", "북구",
    "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"
  ],
  대구광역시: [
    "남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"
  ],
  인천광역시: [
    "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"
  ],
  광주광역시: [
    "광산구", "남구", "동구", "북구", "서구"
  ],
  대전광역시: [
    "대덕구", "동구", "서구", "유성구", "중구"
  ],
  울산광역시: [
    "남구", "동구", "북구", "울주군", "중구"
  ],
  세종특별자치시: [
    "세종시"
  ],
  경기도: [
    "가평군", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시",
    "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시",
    "안양시", "양주시", "양평군", "여주시", "연천군", "오산시", "용인시", "의왕시",
    "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"
  ],
  강원특별자치도: [
    "강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군",
    "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시", "평창군", "홍천군",
    "화천군", "횡성군"
  ],
  충청북도: [
    "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "증평군",
    "진천군", "청주시", "충주시"
  ],
  충청남도: [
    "계룡시", "공주시", "금산군", "논산시", "당진시", "보령시", "부여군", "서산시",
    "서천군", "아산시", "예산군", "천안시", "청양군", "태안군", "홍성군"
  ],
  전라북도: [
    "고창군", "군산시", "김제시", "남원시", "무주군", "부안군", "순창군",
    "완주군", "익산시", "임실군", "장수군", "전주시", "정읍시", "진안군"
  ],
  전라남도: [
    "강진군", "고흥군", "곡성군", "광양시", "구례군", "나주시", "목포시",
    "무안군", "보성군", "순천시", "신안군", "여수시", "영광군", "영암군",
    "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"
  ],
  경상북도: [
    "경산시", "경주시", "고령군", "구미시", "군위군", "김천시", "문경시",
    "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시",
    "영천시", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군",
    "칠곡군", "포항시"
  ],
  경상남도: [
    "거제시", "거창군", "고성군", "김해시", "밀양시", "사천시", "산청군",
    "양산시", "의령군", "진주시", "창녕군", "창원시", "통영시", "하동군",
    "함안군", "함양군", "합천군"
  ],
  제주특별자치도: [
    "서귀포시", "제주시"
  ]
};

const storeData = [
  {
    id: 1,
    name: "가산센트럴시티점",
    location: "서울 금천구 가산동 가산센트럴푸르지오시티 G01,G02호",
    phone: "02-858-8690"
  },
  {
    id: 2,
    name: "홍대점",
    location: "서울 마포구 서교동 403-17 동지빌딩",
    phone: "02-338-7879"
  },
  {
    id: 3,
    name: " 서여의도점",
    location: "서울 영등포구 여의도동 14-2번지",
    phone: "02-3775-3230"
  },
  {
    id: 4,
    name: "대구지산점",
    location: "대구 수성구 지산동청산맨션 1층 7호",
    phone: "053-751-8775"
  },
  {
    id: 5,
    name: "대구칠곡3지구점",
    location: "대구 북구 구암동 65길 50-11, 1층",
    phone: "053-313-2912"
  },
  {
    id: 6,
    name: "대전죽동점",
    location: "대전 유성구 죽동 (죽동)",
    phone: "042-822-6823"
  },
  {
    id: 7,
    name: "동부산관광단지점",
    location: "부산 기장군 기장읍 시랑리 475-2",
    phone: "051- 723-1070"
  },
  {
    id: 8,
    name: "광주 하남2지구점",
    location: "광주 광산구 하남동 51, 1층",
    phone: "062-955-9788"
  },
  {
    id: 9,
    name: "울산테라스파크점",
    location: "울산 동구 일산동 945 테라스파크",
    phone: "052-209-0822"
  },
  {
    id: 10,
    name: "인하대점",
    location: "인천 미추홀구 용현동 1층",
    phone: "032-243-0098"
  },
];


function Store() {

  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setDistricts(cityOptions[city] || []);
  };

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
                <div style={{ color: "#000"}}>대구지산점</div>
              </MapMarker>
            </Map>
          </div>

          <div className="searchBox">
            <select onChange={handleCityChange}>
              <option value="">시/도 선택</option>
              {Object.keys(cityOptions).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <select>
              <option>시/군/구 선택</option>
              {districts.map(district => (
                <option key={district}>{district}</option>
              ))}
            </select>

            <button>검색하기</button>
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
            {storeData.map((store, index) => (
              <tr key={index}>
                <td>{store.name}</td>
                <td>{store.location}</td>
                <td>{store.phone}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Right>
      </ContentArea>
    </>
  );
}

export default Store;
