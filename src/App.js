import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Found from './Found'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact Component={Home}></Route>
        <Route path='/to-sign' exact Component = {Found}></Route>
      </Routes>
    </Router>
  );
}

export default App;
