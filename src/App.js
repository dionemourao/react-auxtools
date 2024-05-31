import logo from './logo.svg';
import './App.css';

//biblioteca externa
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'

// Rotas
import Home from './pages/home'
import Settings from './pages/settings';
import Login from './pages/login';
import Signin from './pages/signin';


function App() {
  return (
    <HashRouter>
      
      <Routes>
        <Route path='/'  Component={Home} ></Route>
        <Route path='/settings' Component={Settings} ></Route>
        <Route path='/login'  Component={Login} ></Route>
        <Route path='/signin'  Component={Signin} ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;


