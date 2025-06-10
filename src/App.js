import React from "react";
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Droptop from "./component/Droptop";
import CoffeeStroy from "./component/CoffeeStroy";
import Menu from "./component/Menu";
import Store from "./component/Store";
import Franchise from "./component/Franchise";
import Community from "./component/Community";
import Event from "./component/Event";

function App() {
  return (
    <div className="wrap">
      <header className="header">
        <div className="header_in">
          <div className="header_main">
            <h1 className="logo">
              <Link to='/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></Link>
            </h1>
            <nav>
              <ul>
                <li><Link to='/droptopstory'>DROPTOP</Link></li>
                <li><Link to='/coffeestory'>925 커피</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/store'>STORE</Link></li>
                <li><Link to='/franchise'>FRANCHISE</Link></li>
                <li><Link to='/event'>EVENT</Link></li>
                <li><Link to='/community'>COMMUNITY</Link></li>
              </ul>
            </nav>
          </div>
          <ul className="q_mn">
            <li>Login</li>
            <li>Join</li>
            <li>Eng</li>
            <li>Membership</li>
          </ul>
        </div>
      </header>

      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/droptopstory' element={<Droptop />} />
          <Route path='/coffeestory' element={<CoffeeStroy />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/store' element={<Store />} />
          <Route path='/franchise' element={<Franchise />} />
          <Route path='/event' element={<Event />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="footer_in">
          <p>
            서울 특별시 송파구 법원로 8길 9, 7층 (주)다도글로벌/드롭탑 | T.(02)541-7800 <br />
            사업자등록번호 : 211-88-47165 | 대표 : 임문수 | 개인정보관리책임자 : 임동진 | 통신판매업번호 : 2019-서울서초-1518<br />
            마케팅∙제휴 문의 top_mkt@dadoglobal.com<br />
            Copyright ⓒ 2021 DROPTOP All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
