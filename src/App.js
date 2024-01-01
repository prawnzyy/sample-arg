import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Found from './Found';
import Second  from './Second';
import Tallies from './Images/Tallies';
import Grid from './Images/Grid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact Component={Home}></Route>
        <Route path = '/second' exact Component={Second}></Route>
        <Route path='/end' exact Component = {Found}></Route>
        <Route path='/grid' exact Component = {Grid}></Route>
        <Route path='/tallies' exact Component = {Tallies}></Route>
      </Routes>
    </Router>
  );
}

export default App;
