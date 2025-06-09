import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";

const CommunityHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    height: 200px;
  }
`;

const CommunityTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .community_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .community_title {
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

function Community() {
  return (
    <>
      <CommunityHeader>
        <img src={process.env.PUBLIC_URL + "/images/community/mainImg.png"} alt="mainImg" />
      </CommunityHeader>
      <CommunityTitle>
        <div className='community_in'>
          <div className='community_title'>
            <h1>공지 사항</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> COMMUNITY <span>&gt;</span>
              <span className="current">공지사항</span>
            </div>
          </div>
          <p>드롭탑 커피의 공지사항 게시판입니다.</p>
        </div>
      </CommunityTitle>
    </>
  );
}

export default Community;