
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Prices from './components/Prices';
import Router from "./routes/index";
import Footer from './components/Footer'

import {AccountBox} from './components/accountBox'
function App() {
  return (
    <div>
      
      <Router /> 

      <About/>
      <Shop/>
      <Menu/>
      <Clients/>
      <Prices/>
      <Footer /> 
      <div className="login-signup-bg">
       
      </div>
      </div>
  );
}

export default App;
