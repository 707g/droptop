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

function Beverage({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage01.png`,
      ttl: "샹그리아 레몬 에이드 (L)",
      eng: "Shangri-La Lemonade",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage02.png`,
      ttl: "수박 주스 (R/L)",
      eng: "Watermelon Juice",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage03.png`,
      ttl: "크러쉬드 블루베리 주스",
      eng: "Crushed blueberry juice",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage04.png`,
      ttl: "선셋 피치 주스(살구, 복숭아)",
      eng: "Sunset Peach Juice",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage05.png`,
      ttl: "선샤인 애플 주스(사과)",
      eng: "Sunshine Apple Juice",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage06.png`,
      ttl: "미드나잇 트로피칼 주스",
      eng: "Midnight Tropical Juice",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage07.png`,
      ttl: "돌체 민트초콜릿 라떼",
      eng: "Dolce Mint Chocolate Latte",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage08.png`,
      ttl: "돌체 민트초콜릿 라떼",
      eng: "Dolce Mint Chocolate Latte",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage09.jpg`,
      ttl: "로얄 클래식 밀크티",
      eng: "Royal Classic Milk Tea",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage10.jpg`,
      ttl: "로얄 클래식 밀크티 아이스",
      eng: "Royal Classic Milk Tea",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage11.jpg`,
      ttl: "초콜릿라떼",
      eng: "Chocolate Latte",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage12.jpg`,
      ttl: "귀리 미숫가루 라떼",
      eng: "Oat Roasted Grains Latte",
    },
    {
      id: 13,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage13.jpg`,
      ttl: "밤고구마 라떼",
      eng: "Sweet Potato Latte",
    },
    {
      id: 14,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage14.jpg`,
      ttl: "제주말차라떼",
      eng: "eju Matcha Latte",
    },
    {
      id: 15,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage15.png`,
      ttl: "딸기 라떼",
      eng: "strawberry latte",
    },
    {
      id: 16,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage16.jpg`,
      ttl: "블랙슈가 버블 라떼",
      eng: "Black Sugar Bubble Latte",
    },
    {
      id: 17,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage17.jpg`,
      ttl: "제주 한라봉 에이드",
      eng: "Jeju Hallabong Ade",
    },
    {
      id: 18,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage18.jpg`,
      ttl: "자몽에이드",
      eng: "Grapefruit Ade",
    },
    {
      id: 19,
      src: `${process.env.PUBLIC_URL}/images/menu/beverage/beverage19.jpg`,
      ttl: "레몬에이드",
      eng: "Lemonade",
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


export default Beverage;