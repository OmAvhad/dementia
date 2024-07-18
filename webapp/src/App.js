import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import DashboardPage from './pages/dashboardPage/dashboardPage';
import Login from './pages/loginPage/Login';
import SignIn from './pages/signInPage/SignIn';
import GetStarted from './pages/getStarted/GetStarted';
import Onboarding from './pages/onboarding/Onboarding';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/getStarted' element={<GetStarted />}/>
        <Route path='/onboarding' element={<Onboarding />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
