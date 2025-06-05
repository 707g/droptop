import React from "react";
import './App.css';
import { Link, Route } from "react-router-dom";
import Main from "./component/Main";
import Droptop from "./component/Droptop";
import CoffeeStroy from "./component/CoffeeStroy";
import Menu from "./component/Menu";
import Store from "./component/Store";
import Pranchise from "./component/Pranchise";
import Community from "./component/Community";

function App() {
  return(
    <div className="wrap">
      <header className="header">
        <div className="header_in">
          <div className="header_main">
            <h1 className="logo"><Link to='/'><img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" style={{ width: "100%", height: "100%", objectFit: "contain" }}/></Link></h1>
            <nav>
              <ul>
                <li><Link to='/droptopstory'>DROPTOP</Link></li>
                <li><Link to='/coffeestory'>925 커피</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/store'>STORE</Link></li>
                <li><Link to='/pranchise'>PRANCHISE</Link></li>
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
        <Route path='/' exact={true} component={Main}/>
        <Route path='/droptopstory' component={Droptop}/>
        <Route path='/coffeestory' component={CoffeeStroy}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/store' component={Store}/>
        <Route path='/pranchise' component={Pranchise}/>
        <Route path='/community' component={Community}/>
      </div>
    </div>
  );
}

export default App;