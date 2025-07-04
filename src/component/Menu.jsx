import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdHome } from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import New from './Menu/New';
import Coffee from './Menu/Coffee';
import Beverage from './Menu/Beverage';
import Blended from './Menu/Blended';
import Tea from './Menu/Tea';
import IceTop from './Menu/IceTop';
import Food from './Menu/Food';
import Cake from './Menu/Cake';

const MenuHeader = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;

  img {
    width: 952px;
    height: 200px;
  }
`;

const MenuTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .menu_in {
    width: 952px;
    height: 200px;
    display: flex;
    flex-direction: column;

    p {
      color: #6B6B6B;
    }

    .menu_title {
      width: 952px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-weight: 600;
        color: #0A2986;
      }

      .nav {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #999;

        svg {
          margin-right: 4px;
          font-size: 18px;
          vertical-align: middle;
        }

        .current {
          color: #0A2986;
          font-weight: bold;
        }

        span {
          margin: 0 4px;
        }
      }
    }
  }
`;

const CustomTabsWrapper = styled.div`
  width: 952px;
  margin: 0 auto;
  margin-bottom: 50px;

  .nav-tabs {
    background-color: #EEF7FD;
  }

  .nav-tabs .nav-link {
    color: #0A2986;
    padding: 12px 20px;
    font-size: 17px;
    font-weight: 600;
  }

  .nav-tabs .nav-link.active {
    color: #fff;
    background-color: #0A2986;
  }
`;

function Menu() {
  const location = useLocation();
  const [ activekey, setActivekey ] = useState("NEW");

  useEffect(() => {
    if(location.pathname === "/menu") {
      setActivekey("NEW");
    }
  }, [location]);

  return (
    <>
      <MenuHeader>
        <img src={process.env.PUBLIC_URL + "/images/menu/mainImg.png"} alt="mainImg" />
      </MenuHeader>
      <MenuTitle>
        <div className='menu_in'>
          <div className='menu_title'>
            <h1>All Menu</h1>
            <div className="nav">
              <IoMdHome />
              HOME <span>&gt;</span> MENU <span>&gt;</span>
              <span className="current">전체메뉴</span>
            </div>
          </div>
          <p>DROPTOP 전체메뉴</p>
        </div>
      </MenuTitle>
      <CustomTabsWrapper>
        <Tabs
        activeKey={activekey}
        onSelect={(k) => setActivekey(k)}
        id="justify-tab-example"
        className="mb-3"
        justify
        >
          <Tab eventKey="NEW" title="NEW">
            <New />
          </Tab>
          <Tab eventKey="COFFEE" title="COFFEE">
            <Coffee />
          </Tab>
          <Tab eventKey="BEVERAGE" title="BEVERAGE">
            <Beverage />
          </Tab>
          <Tab eventKey="BLENDED" title="BLENDED">
            <Blended />
          </Tab>
          <Tab eventKey="TEA" title="TEA">
            <Tea />
          </Tab>
          <Tab eventKey="ICE TOP" title="ICE TOP">
            <IceTop />
          </Tab>
          <Tab eventKey="FOOD" title="FOOD">
            <Food />
          </Tab>
          <Tab eventKey="CAKE" title="CAKE">
            <Cake />
          </Tab>
        </Tabs>
      </CustomTabsWrapper>
    </>
  );
}

export default Menu;