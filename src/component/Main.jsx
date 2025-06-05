import styled from 'styled-components';
import React from 'react';

const MainHeader = styled.div`
  width: 100%;
  height: 780px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 1300px;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: -440px;
    left: 0;
    z-index: 1;
  }

  h1, h2, p {
    position: relative;
    z-index: 10;
    color: white;
    width: 80%;
    box-sizing: border-box;
    margin-left: 70px;
    display: flex;
    justify-content: left;
    align-items: center;
    
  }

  h1 {
    margin-top: 80px;
    font-size: 3.5rem;
    color: #003366;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 10px;
  }

  p {
    font-size: 1.5rem;
    margin-top: 20px;
    line-height: 1.5;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: auto;
`;

const MainMenu = styled.div`

`;

const MainCoffeeStory = styled.div`

`;

const MainStore = styled.div`

`;

const MainNotice = styled.div`
`;

function Main() {
  return (
    <>
      <MainHeader>
        <img src={process.env.PUBLIC_URL + "/images/main/mainImg.jpg"} alt="main"/>
        <h1>Special</h1>
        <h2>더 스페셜하게</h2>
        <p>큐그레이가 엄선한 차별화된 원두<br/>
          자체 로스팅 기법을 담은 특별한 프로듀싱<br/>
          원두 각각, 사후 블렌딩 개성의 최대화<br/>
          처음부터 끝까지 소비자를 생각한 공정</p>
      </MainHeader>
      <MainContent>
        <MainMenu></MainMenu>
        <MainCoffeeStory></MainCoffeeStory>
        <MainStore></MainStore>
        <MainNotice></MainNotice>
      </MainContent>
    </>
  );
}

export default Main;
