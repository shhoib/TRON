import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Login from './components/Login/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
