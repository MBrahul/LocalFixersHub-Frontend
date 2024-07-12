import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/login/user' Component={()=><LoginPage heading={"user"}/>}/>
      <Route path='/login/worker' Component={()=><LoginPage heading={"worker"}/>}/>
      <Route path='/signup/user' Component={()=><SignUpPage heading = {"user"}/>}/>
      <Route path='/signup/worker' Component={()=><SignUpPage heading = {"worker"}/>}/>
      <Route path='/contact-us' Component={ContactPage}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

