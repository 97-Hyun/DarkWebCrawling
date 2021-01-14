import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';


export default function Nav() {
    return (
      <nav>
          <div className="nav__title">Dark Web Data</div>
          <NavMenu></NavMenu>    
          <Icon name="nav__lang-chg" type="language"></Icon>
          <Icon name="nav__toogleBtn" type="bars"></Icon>
      </nav>
    );
  }
  
function NavMenu() {
    return (
      <Router>
        <ul className="nav__menu">
          <li><NavLink to="/all">전체 데이터</NavLink></li>
          <li><NavLink to="/weapon">상세 데이터</NavLink></li>
          <li><NavLink to="/drug">상세 데이터</NavLink></li>
          <li><NavLink to="/hack">상세 데이터</NavLink></li>
          <Switch>
            <Route path="/all"></Route>
            <Route path="/weapon"></Route>
            <Route path="/drug"></Route>
            <Route path="/hack"></Route>
            <Route path="/"></Route>
          </Switch>
        </ul>
      </Router>
    );
}
  
function Icon(props) {
  return (
    <a href="#" className={props.name}>
      <i className={"fas fa-" + props.type}></i>
    </a>
  )
}
  