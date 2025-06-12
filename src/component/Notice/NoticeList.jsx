import React from 'react';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-bottom: 100px;
`;

const ItemBlock = styled.div`
  width: 23%;
  height: 260px;
  margin: 30px 1% 0 1%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  img {
    width: 70%;
    margin: 15px 0;
  }
  h4 {
    font-size: 16px;
    color: #6B6B6B;
  }
  p {
    font-size: 13px !important;
    color: #6B6B6B;
  }
`;

function NoticeList({item}) {
  const newList = [
    {
      id: 1,
      number: index,
      title: "25. 06 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-06-10",
      views: "0"
    },
    {
      id: 1,
      number: index,
      title: "25. 06 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-06-10",
      views: "0"
    },
    {
      id: 1,
      number: index,
      title: "25. 06 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-06-10",
      views: "0"
    },
    {
      id: 1,
      number: index,
      title: "25. 06 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
      writer: "관리자",
      date: "2025-06-10",
      views: "0"
    },
    
  ];

    return (
      <ItemsWrapper>
        {newList.map((item) => (
          <ItemBlock key={item.id}>
            <img src={item.src} alt={item.ttl} />
            <h4>{item.ttl}</h4>
            <p>{item.eng}</p>
          </ItemBlock>
        ))}
      </ItemsWrapper>
    );
}


export default NoticeList;