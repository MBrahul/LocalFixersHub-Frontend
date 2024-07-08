import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/login' Component={Login}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

