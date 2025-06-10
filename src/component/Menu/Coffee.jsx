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

function Coffee({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee01.jpg`,
      ttl: "바나나 크림 라떼 (HOT)",
      eng: "Banana Cream Latte",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee02.png`,
      ttl: "바나나 크림 라떼 (ICE)",
      eng: "Banana Cream Latte",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee03.png`,
      ttl: "바닐라빈 오트 콜드브루 라떼",
      eng: "Vanilla Bean Oat Cold Brew",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee04.png`,
      ttl: "바닐라빈 더블샷 라떼",
      eng: "Vanilla Bean Double Shot",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee05.png`,
      ttl: "바닐라빈 더블샷 라떼",
      eng: "Vanilla Bean Double Shot",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee06.jpg`,
      ttl: "아메리카노",
      eng: "Americano",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee07.jpg`,
      ttl: "바닐라 아이스크림 라떼",
      eng: "Vanilla Ice-cream Latte",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee08.jpg`,
      ttl: "카페라떼",
      eng: "Cafe Latte",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee09.jpg`,
      ttl: "카푸치노",
      eng: "Cappuccino",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee10.jpg`,
      ttl: "바닐라라떼",
      eng: "Vanilla Latte",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee11.jpg`,
      ttl: "카라멜마끼아또",
      eng: "Caramel Macchiato",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee12.jpg`,
      ttl: "카페모카",
      eng: "Cafe Mocha",
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee13.jpg`,
      ttl: "에스프레소",
      eng: "Espresso",
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee14.jpg`,
      ttl: "아포가토",
      eng: "Affogato",
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee15.jpg`,
      ttl: "콜드브루",
      eng: "Cold Brew",
    },
    {
      id: 16,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee16.png`,
      ttl: "콜드브루 라떼",
      eng: "Cold Brew Latte",
    },
    {
      id: 17,
      src: `${process.env.PUBLIC_URL}/images/menu/coffee/coffee17.png`,
      ttl: "돌체 콜드브루 라떼",
      eng: "Dolce Coldbrew Latte",
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


export default Coffee;