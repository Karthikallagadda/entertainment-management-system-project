import logo from './logo.svg';
import './App.css';

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
import Wedding from './components/Wedding';
import Function from './components/Function';
import Main from './components/Main';






function App() {
  return (

    <div className="App">

<Router>
      <Navbar/>
  <div className='container my-3'>
        <Switch>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/home"><Home/> </Route>
          <Route exact path="/login"><TextForm/> </Route>
          <Route exact path="/wedding"><Wedding/></Route>
          <Route exact path="/function"> <Function/></Route>
          <Route exact path="/main"><Main/></Route>
</Switch>
        </div>
        </Router>

      
      



            

      
      
    </div>
  );
}

export default App;
