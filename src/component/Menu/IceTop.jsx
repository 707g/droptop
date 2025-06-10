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

function IceTop({item}) {
  const newList = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/images/menu/icetop/icetop01.jpg`,
      ttl: "쫀득 통팥 모찌 빙수",
      eng: "Chewy Red Bean Mochi",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/images/menu/icetop/icetop02.jpg`,
      ttl: "황금 망고 모찌 빙수",
      eng: "Golden Mango Mochi Bingsu",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/images/menu/icetop/icetop03.jpg`,
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


export default IceTop;