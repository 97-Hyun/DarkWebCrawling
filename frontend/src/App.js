import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
    <Nav></Nav>
    <Content></Content>
    <Footer></Footer>
    </div>
  );
}

export default App;
