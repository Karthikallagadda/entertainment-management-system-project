
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';


import CarouselFadeExample from './components/Main';
import Hero from './components/Hero';
import Cards from './Cards/card';
import Carding from './Cards/Carding';
import Cardis from './components/Services';
import Cardus from './components/Cardus';
import Cardss from './components/Cardss';
import Contact from './components/Contact';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  const [user,setLoginUser]=useState({})
  return (

    <div className="App">

<Router>
      <Navbar/>
  <div className='container my-3'>
        <Switch>


        <Route exact path="/">
            {
              user && user._id ? <CarouselFadeExample setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>


















          <Route exact path="/about"><About/></Route>
          <Route exact path="/home">
            <CarouselFadeExample/>
            <Cardss/>
            </Route>
          <Route exact path="/login"><TextForm/></Route>
          <Route exact path="/contact"><Contact/>
          </Route>
          <Route exact path="/services">
            <Cardis/>
            <Cardus/>
            </Route>
          
          
</Switch>

        </div>
        <Route exact path="/main"><Hero/> <Cards/> <Carding/></Route>
        </Router>

        
      



            

      
      
    </div>
  );
}

export default App;
