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

function Tea({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea01.png`,
      ttl: "제로슈가 허니자몽 아이스티",
      eng: "Zero Sugar Iced Tea",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea02.png`,
      ttl: "제로슈가 복숭아 아이스티",
      eng: "Zero Sugar Iced Tea (Peach)",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea03.jpg`,
      ttl: "납작복숭아 아이스티",
      eng: "Flat Peach Iced Tea",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea04.jpg`,
      ttl: "망고 히비스커스티",
      eng: "Mango Hibiscus Tea",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea05.jpg`,
      ttl: "페퍼민트 허브티",
      eng: "Peppermint herb tea",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea06.jpg`,
      ttl: "메도우 캐모마일티",
      eng: "Meadow Chamomile tea",
    },
    {
      id: 7,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea07.jpg`,
      ttl: "히비스커스티",
      eng: "Hibiscus tea",
    },
    {
      id: 8,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea08.jpg`,
      ttl: "베르가못 얼그레이티",
      eng: "Bergamot earl grey tea",
    },
    {
      id: 9,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea09.jpg`,
      ttl: "유자차",
      eng: "Citron Tea",
    },
    {
      id: 10,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea10.jpg`,
      ttl: "레몬차",
      eng: "Lemon Tea",
    },
    {
      id: 11,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea11.jpg`,
      ttl: "자몽차",
      eng: "Grapefruit Tea",
    },
    {
      id: 12,
      src: `${process.env.PUBLIC_URL}/images/menu/tea/tea12.jpg`,
      ttl: "제주 한라봉차",
      eng: "Jeju Hallabong Tea",
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


export default Tea;