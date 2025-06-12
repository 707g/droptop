import React from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import NoticeList from './Notice/NoticeList';

const CommunityHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 952px;
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

const CommunityList = styled.div`
  width: 952px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  .search-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    select, input, button {
      height: 32px;
      margin-left: 8px;
      padding: 0 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      background-color: #0A2986;
      color: #fff;
      cursor: pointer;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: #f2f2f2;
    }

    th, td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: center;
      cursor: pointer;
    }

    tbody tr:hover {
      background-color: #f9f9f9;
    }

    .no-data {
      color: #888;
      padding: 40px 0;
      text-align: center;
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
      <CommunityList>
        <div className="search-bar">
          <select>
            <option>제목</option>
            <option>내용</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            <NoticeList/>
          </tbody>
        </table>
      </CommunityList>
    </>
  );
}

export default Community;
