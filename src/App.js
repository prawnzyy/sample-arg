import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Found from './pages/Found';
import Second  from './pages/Second';
import Tallies from './Images/Tallies';
import Grid from './Images/Grid';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Spring from './Images/Spring';
import Summer from './Images/Summer';
import Autumn from './Images/Autumn';
import Winter from './Images/Winter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact Component={Home}></Route>
        <Route path = '/second' exact Component={Second}></Route>
        <Route path='/end' exact Component = {Found}></Route>
        <Route path='/grid' exact Component = {Grid}></Route>
        <Route path='/tallies' exact Component = {Tallies}></Route>
        <Route path = '/third' exact Component={Third}></Route>
        <Route path = '/fourth' exact Component={Fourth}></Route>
        <Route path = '/Spring' exact Component={Spring}></Route>
        <Route path = '/Summer' exact Component={Summer}></Route>
        <Route path = '/Autumn' exact Component={Autumn}></Route>
        <Route path = '/Winter' exact Component={Winter}></Route>
      </Routes>
    </Router>
  );
}

export default App;
