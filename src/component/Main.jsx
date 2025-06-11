import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from './Main/MainHeader'

const MainContent = styled.div`
  width: 100%;
  height: auto;
`;

const MainMenu = styled.div`
  width: 100%;
  height: 840px;
  display: flex;
  justify-content: center;

  .mainMenu_in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #0A2986;
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
    ttl: "샹그리아 레몬 에이드 (L)",
    eng: "Shangri-La Lemonade",
  },
  {
    id: 2,
    src: "/images/main/mainMenu02.png",
    ttl: "수박 주스 (R/L)",
    eng: "Watermelon Juice",
  },
  {
    id: 3,
    src: "/images/main/mainMenu03.png",
    ttl: "애플망고 블렌디드 (R/L)",
    eng: "Apple Mango Blended",
  },
  {
    id: 4,
    src: "/images/main/mainMenu04.jpg",
    ttl: "달콤 연유 밀크 블렌디드",
    eng: "Sweet Milk Bite Blended",
  },
]

const ItemBlock = styled.div`
  width: 23%;
  height: 320px;
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
    font-size: 18px;
    color: #6B6B6B;
  }
  p {
    font-size: 15px !important;
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
      color: #0A2986;
    }

    h2 {
      font-weight: 400;
      color: #0A2986;
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
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;

  .mainNotice_in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #0A2986;
      font-size: 30px;
      margin-bottom: 10px;
    }

    p {
      font-size: 22px;
      font-weight: 700;
    }

    .mainNoticeBtn {
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

const NoticeMenuList = [
  {
    id: 1,
    ttl: "25. 05 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
    date: "2025-05-15",
  },
  {
    id: 2,
    ttl: "25. 04 드롭탑 매장 판매제품 영양성분 및 알레르기 유발물질 안내",
    date: "2025-04-22",
  },
  {
    id: 3,
    ttl: "25. 04 드롭탑 휴게소 매장 판매제품 영양성분 및 알레르기 유발물질 안내 ",
    date: "2025-04-22",
  },
  {
    id: 4,
    ttl: "25. 03 드롭탑 판매제품 영양성분 및 알레르기 유발물질 안내",
    date: "2025-03-12",
  },
  
]

const NoticeBlock = styled.div`
  width: 15%;
  height: 180px;
  margin: 50px 1% 0 1%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px 10px 20px 10px;

  h4 {
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    margin: 20px 10px 10px 10px;

  }

  p {
    font-size: 15px !important;
    color: #6B6B6B;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    margin-top: 20px;
  }
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

function Notice({notice}) {
  return(
    <NoticeBlock>
      <h4>{notice.ttl}</h4>
      <p>{notice.date}</p>
    </NoticeBlock>

  );
}

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <MainHeader />
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
        <MainNotice>
          <div className='mainNotice_in'>
            <h1>공지사항</h1>
            <p>드롭탑 소식을 전해드립니다.</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
              {
                NoticeMenuList.map(notice => (
                  <Notice key={notice.id} notice={notice} />
                ))
              }
            </div>
            <div className='mainNoticeBtn' onClick={() => navigate("/community")}>+ 더보기</div>
          </div>
        </MainNotice>
      </MainContent>
    </>
  );
}

export default Main;
