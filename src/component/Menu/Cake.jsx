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

function Cake({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake01.png`,
      ttl: "바나나 멜로디 리얼 초코",
      eng: "Banana Melody Real Choco",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake02.jpg`,
      ttl: "생딸기 피스타치오 케이크",
      eng: "Strawberry Pistachio Cake",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake03.png`,
      ttl: "크림치즈 당근",
      eng: "Cream Cheese Carrot",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake04.png`,
      ttl: "가또 얼그레이",
      eng: "Gateau Earl Gray",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake05.png`,
      ttl: "멜로디 리얼 초코",
      eng: "Melody Real Choco",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake06.png`,
      ttl: "가나슈 레드벨벳",
      eng: "Ganache Red Velvet",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake07.png`,
      ttl: "깔루아 티라미수",
      eng: "Khalua Tiramisu",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake08.jpg`,
      ttl: "흑임자 크림 카스텔라",
      eng: "Black Sesame Cream Castella",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake09.jpg`,
      ttl: "오트 크림 카스텔라",
      eng: "Oat Cream Castella",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake10.jpg`,
      ttl: "순우유 크림",
      eng: "Fresh Milk Cream",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake11.jpg`,
      ttl: "다크초콜릿",
      eng: "Dark Chocolate Mousse Cake",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/menu/cake/cake12.jpg`,
      ttl: "수플레치즈",
      eng: "Souffle Cheese Cake",
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


export default Cake;