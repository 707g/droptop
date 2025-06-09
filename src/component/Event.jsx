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

function Event() {
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
    </>
  );
}

export default Event;