import logo from './logo.svg';
import './App.css';

//biblioteca externa
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Rotas
import Home from './pages/home'
import Settings from './pages/settings';
import Login from './pages/login';
import Signin from './pages/signin';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


