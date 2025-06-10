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

function New({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new01.png`,
      ttl: "샹그리아 레몬 에이드 (L)",
      eng: "Shangri-La Lemonade",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new02.png`,
      ttl: "수박 주스 (R/L)",
      eng: "Watermelon Juice",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new03.png`,
      ttl: "애플망고 블렌디드 (R/L)",
      eng: "Apple Mango Blended",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new04.jpg`,
      ttl: "달콤 연유 밀크 블렌디드",
      eng: "Sweet Milk Bite Blended",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new05.jpg`,
      ttl: "제주 말차 통팥 블렌디드",
      eng: "Jeju Malcha Red Bean",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new06.jpg`,
      ttl: "콘 카라멜 블렌디드",
      eng: "Corn caramel Blended",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new07.jpg`,
      ttl: "쫀득 통팥 모찌 빙수",
      eng: "Chewy Red Bean Mochi",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new08.jpg`,
      ttl: "황금 망고 모찌 빙수",
      eng: "Golden Mango Mochi Bingsu",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/new/new09.jpg`,
      ttl: "상큼 오미자 모찌 빙수",
      eng: "Tangy Omija Mochi Bingsu",
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


export default New;