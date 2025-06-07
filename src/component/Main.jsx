import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  width: 100%;
  height: 860px;
  display: flex;
  justify-content: center;

  .mainMenu_in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #003366;
      font-size: 30px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      font-weight: 600;
    }

    .mainMenuBtn {
      width: 200px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

`;

const MainMenuList = [
  {
    id: 1,
    src: "/images/main/mainMenu01.png",
    ttl: "바나나 크림 라떼(ICE)",
    eng: "Banana Cream Latte",
  },
  {
    id: 2,
    src: "/images/main/mainMenu02.png",
    ttl: "바닐라빈 오트 콜드블루 라떼",
    eng: "Vanilla Bean Oat Cold Brew",
  },
  {
    id: 3,
    src: "/images/main/mainMenu03.jpg",
    ttl: "달콤 연유 밀크 블렌디드",
    eng: "Sweet Milk Bite Blended",
  },
  {
    id: 4,
    src: "/images/main/mainMenu04.jpg",
    ttl: "제주 말차 통팥 블렌디드",
    eng: "Jeju Malcha Red Bean",
  },
]

const ItemBlock = styled.div`
  width: 23%;
  height: 400x;
  margin: 50px 1% 0 1%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px 10px 20px 10px;

  img {
    width: 70%;
    margin: 15px 0;
  }
  h4 {
    font-size: 15px;
    color: #6B6B6B;
  }
  p {
    font-size: 12px !important;
    color: #6B6B6B;
  }
`;

const MainCoffeeStory = styled.div`
  width: 100%;
  height: 1150px;
  display: flex;
  justify-content: center;
  background-color: #E9E9E7;

  img {
    width: auto;
    height: 1000px;
  }

  .coffeeStoryBtn {
    width: 200px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0px 80px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      background-color: #D5D5D3;
    }
  }

`;

const MainStore = styled.div`
  width: 100%;
  height: 500px;
  background-color: #E9E9E7;
  display: flex;
  justify-content: center;

  img {
    width: 600px;
    height: 460px;
    display: flex;
    box-sizing: border-box;
    margin: 10px 0 0 80px;
  }

  .store_in {
    width: 900px;
    height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    h1 {
      color: #003366;
    }

    h2 {
      font-weight: 400;
      color: #003366;
    }

    .mainStoreBtn {
    width: 200px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      background-color: #D5D5D3;
    }
    }
  }
`;

const MainNotice = styled.div`
  
`;

function Item({item}) {
  return(
    <ItemBlock>
      <img src={process.env.PUBLIC_URL + item.src} alt='' />
      <h4>{item.ttl}</h4>
      <p>{item.eng}</p>
    </ItemBlock>
  );
}

function Main() {
  const navigate = useNavigate();
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
        <MainMenu>
          <div className='mainMenu_in'>
            <h1>DROPTOP'S NEW MENU</h1>
            <p>드롭탑 신메뉴</p>
            <div style={{display: "flex", flexWrap: "wrap"}}>
              {
                MainMenuList.map(item => (
                  <Item key={item.id} item={item}/>
                ))
              }
            </div>
            <div className='mainMenuBtn' onClick={() => navigate("/menu")}>자세히보기</div>
          </div>
        </MainMenu>
        <MainCoffeeStory>
          <div>
            <img src= {process.env.PUBLIC_URL + "/images/main/coffeestory.png"} alt="coffeestory" />
            <div className='coffeeStoryBtn' onClick={() => navigate("/coffeestory")}>자세히 보기</div>
          </div>
        </MainCoffeeStory>
        <div style={{width: "100%", height: "200px"}}></div>
        <MainStore>
          <img src={process.env.PUBLIC_URL + "/images/main/mainstore.png"} alt="mainStore" />
          <div className='store_in'>
            <h1>전국 어디서나 DROPTOP과 함께!</h1>
            <h2>가까운 드롭탑 카페를 확인해보세요.</h2>
            <div className='mainStoreBtn' onClick={() => navigate("/store")}>매장 찾기</div>
          </div>
        </MainStore>
        <MainNotice></MainNotice>
      </MainContent>
    </>
  );
}

export default Main;
