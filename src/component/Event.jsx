import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const EventHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 200px;
  }
`;

const EventTitle = styled.div`
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

const ItemsWrapper = styled.div`
  width: 952px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const ItemBlock = styled.div`
  width: 455px;
  height: 230px;
  margin: 30px 1.2% 0 1%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 80%;
    margin: 15px 0;
  }
  h4 {
    width: 70%;
    box-sizing: border-box;
    margin-top: 10px;
    font-size: 16px;
    color: #6B6B6B;
  }
  p {
    width: 70%;
    font-size: 13px !important;
    color: #6B6B6B;
  }
`;

function Event() {

  const list = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/event/event01.png`,
      ttl: "빙수 메뉴 출시 선착순 앱쿠폰 할인 이벤트",
      date: "2024-07-05 ~ 2024-08-03",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/event/event02.jpg`,
      ttl: "인스타그램 게시물 좋아요 이벤트",
      date: "2023-12-11 ~ 2023-12-24",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/event/event03.png`,
      ttl: "겨울 신메뉴 구매 인증 이벤트",
      date: "2023-11-30 ~ 2023-12-06",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/event/event04.png`,
      ttl: "인스타그램 게시물 공유 & 친구 태그 이벤트",
      date: "2023-11-24 ~ 2023-11-30",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/event/event05.jpg`,
      ttl: "추석맞이 소원 부적 공유 이벤트",
      date: "2023-09-28 ~ 2023-10-03",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/event/event06.png`,
      ttl: "인스타그램 신규 계정 팔로우 이벤트",
      date: "2023-08-10 ~ 2023-08-30",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/event/event07.png`,
      ttl: "돌체 민트초콜릿 라떼",
      date: "Dolce Mint Chocolate Latte",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/event/event08.jpg`,
      ttl: "여름 신메뉴 프로모션 이벤트",
      date: "2023-05-15 ~ 2023-06-30",
    },
  ];
  
  return (
    <>
      <EventHeader>
        <img src={process.env.PUBLIC_URL + "/images/event/mainImg.png"} alt="mainImg" />
      </EventHeader>
      <EventTitle>
        <div className='event_in'>
          <div className='event_title'>
            <h1>이벤트 소식</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> EVENT <span>&gt;</span>
              <span className="current">이벤트 소식</span>
            </div>
          </div>
          <p>드롭탑의 다양한 이벤트 소식을 전합니다.</p>
        </div>
      </EventTitle>
      <ItemsWrapper>
        {list.map((item) => (
          <ItemBlock key={item.id}>
            <img src={item.src} alt={item.ttl} />
            <h4>{item.ttl}</h4>
            <p>{item.date}</p>
          </ItemBlock>
        ))}
      </ItemsWrapper>
    </>
  );
}

export default Event;