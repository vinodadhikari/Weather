import { Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import AboutUs from './pages/AboutUs';
import Api from './pages/API';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/api">
        <Api />
      </Route>
    </div>
  );
}

export default App;
