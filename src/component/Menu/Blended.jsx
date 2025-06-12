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
    cursor: pointer;
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

function Blended({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended0.png`,
      ttl: "애플망고 블렌디드 (R/L)",
      eng: "Apple Mango Blended",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended01.jpg`,
      ttl: "달콤 연유 밀크 블렌디드",
      eng: "Sweet Milk Bite Blended",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended02.jpg`,
      ttl: "제주 말차 통팥 블렌디드",
      eng: "Jeju Malcha Red Bean",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended03.jpg`,
      ttl: "콘 카라멜 블렌디드",
      eng: "Corn caramel Blended",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended04.png`,
      ttl: "바나나 크림 초코 블렌디드",
      eng: "Banana Cream Chocolate",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended05.png`,
      ttl: "바나나 밀크 블렌디드",
      eng: "Banana Milk Blended",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended06.jpg`,
      ttl: "봄딸기 초코쉘 요거트 블렌디드",
      eng: "Strawberry Chocolate Yogurt",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended07.jpg`,
      ttl: "쿠키앤크림 밀크 블렌디드",
      eng: "Milk Blended",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended08.png`,
      ttl: "자바칩 밀크 블렌디드",
      eng: "Milk Blended (Java Chip)",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended09.png`,
      ttl: "민트초콜릿 블렌디드",
      eng: "Mint Chocolate Blended",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended10.png`,
      ttl: "바닐라빈 밀크 블렌디드",
      eng: "Vanilla Bean Milk Blended",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended11.jpg`,
      ttl: "제주 한라봉 블렌디드",
      eng: "Jeju Hallabong Blended",
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended12.jpg`,
      ttl: "애플망고 블렌디드",
      eng: "Apple Mango Blended",
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended13.jpg`,
      ttl: "플레인요거트 블렌디드",
      eng: "Plain Yogurt Blended",
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended14.jpg`,
      ttl: "블루베리 요거트 블렌디드",
      eng: "Blueberry Yogurt Blended",
    },
    {
      id: 16,
      src: `${process.env.PUBLIC_URL}/images/menu/blended/blended15.jpg`,
      ttl: "딸기 요거트 블렌디드",
      eng: "Strawberry Yogurt Blended",
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


export default Blended;