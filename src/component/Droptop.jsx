import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const DroptopHeader = styled.div`
  width: 100%;
  height: 270px;
`;

const CustomTabsWrapper = styled.div`
  width: 56%;
  margin: 0 auto;

  .nav-tabs {
    background-color: #EEF7FD;
  }

  .nav-tabs .nav-link {
    color: #003366;
    padding: 12px 20px;
    font-size: 17px;
    font-weight: 600;
  }

  .nav-tabs .nav-link.active {
    color: #fff;
    background-color: #003366;
  }
`;

function Droptop() {
  const location = useLocation();
  const [ activekey, setActivekey ] = useState("brandstory");

  useEffect(() => {
    if(location.pathname === "/dropstory") {
      setActivekey("brandstory");
    }
  }, [location]);

  return (
    <>
      <DroptopHeader>
        <img src={process.env.PUBLIC_URL + "/images/droptop/mainImg.png"} alt="droptop" />
      </DroptopHeader>
      <CustomTabsWrapper>
        <Tabs
        activeKey={activekey}
        onSelect={(k) => setActivekey(k)}
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="brandstory" title="브랜드이야기">
          <img src={process.env.PUBLIC_URL + "/images/droptop/brandstory.jpg"} alt="brandstory" />
        </Tab>
        <Tab eventKey="interior" title="인테리어 콘셉트">
          <img src={process.env.PUBLIC_URL + "/images/droptop/interior.jpg"} alt="interior" />
        </Tab>
      </Tabs>
      </CustomTabsWrapper>
    </>
  );
}

export default Droptop;