import './App.scss'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/dashboard' element={<Dashboard/>}/>  
     </Routes>
    </BrowserRouter>
  )
}

export default App
