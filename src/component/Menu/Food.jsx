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

function Food({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food01.png`,
      ttl: "바나나 초코 크로플",
      eng: "Banana Chocolate Croffle",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food02.jpg`,
      ttl: "생딸기 허니 브레드",
      eng: "Strawberry Honey Bread",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food03.jpg`,
      ttl: "피스타치오 마카롱",
      eng: "Pistachio Macaron",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food04.jpg`,
      ttl: "초코라떼 마카롱",
      eng: "Chocolate Latte Macaron",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food05.jpg`,
      ttl: "육즙 가득 핫도그",
      eng: "Corn dog",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food06.jpg`,
      ttl: "단팥 듬뿍 쫀득 꽈배기",
      eng: "Twisted donut",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food07.jpg`,
      ttl: "겉바 속쫀 페스츄리 호두볼",
      eng: "Walnut cake",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food08.jpg`,
      ttl: "햄치즈 소금빵",
      eng: "Ham and Cheese Salted",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food09.jpg`,
      ttl: "포테이토 샐러드 소금빵",
      eng: "Potato Salad Salted Bread",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food10.jpg`,
      ttl: "에그 샐러드 소금빵",
      eng: "Egg Salad Salted Bread",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food11.jpg`,
      ttl: "고메버터 소금빵",
      eng: "Salted butter roll",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food12.jpg`,
      ttl: "바질 토마토 햄 치아바타",
      eng: "Basil Tomato Ham Ciabatta",
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food13.jpg`,
      ttl: "할라피뇨 치킨 치아바타",
      eng: "Jalapeno chicken chiabata",
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food14.jpg`,
      ttl: "휘낭시에",
      eng: "Financier",
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food15.jpg`,
      ttl: "바닐라 아이스크림 크로플",
      eng: "Vanilla ice cream croiffle",
    },
    {
      id: 16,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food16.jpg`,
      ttl: "플레인 크로플",
      eng: "Plain croiffle",
    },
    {
      id: 17,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food17.jpg`,
      ttl: "잉글리쉬 머핀",
      eng: "English Muffin",
    },
    {
      id: 18,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food18.jpg`,
      ttl: "리얼 브라우니",
      eng: "Real Brownie",
    },
    {
      id: 19,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food19.jpg`,
      ttl: "크리미 크로칸 슈",
      eng: "Cremy Croquant Chou",
    },
    {
      id: 20,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food20.jpg`,
      ttl: "크로크무슈",
      eng: "Croque Monsieur",
    },
    {
      id: 21,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food21.jpg`,
      ttl: "쿠앤크 마카롱",
      eng: "Cookie & Cream Macaron",
    },
    {
      id: 22,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food22.jpg`,
      ttl: "뽀또치즈 마카롱",
      eng: "Poteau Cheese Macaron",
    },
    {
      id: 23,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food23.jpg`,
      ttl: "순우유 뚱카롱",
      eng: "Milk Ddungcaron",
    },
    {
      id: 24,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food24.jpg`,
      ttl: "잉글리쉬 머핀 샌드위치",
      eng: "English Muffin Sandwich",
    },
    {
      id: 25,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food25.jpg`,
      ttl: "메이플 허니브레드",
      eng: "Maple Honey Bread",
    },
    {
      id: 26,
      src: `${process.env.PUBLIC_URL}/images/menu/food/food26.jpg`,
      ttl: "갈릭치즈 허니브레드",
      eng: "Garlic Cheese Honey Bread",
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


export default Food;