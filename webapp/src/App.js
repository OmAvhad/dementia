import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import DashboardPage from './pages/dashboardPage/dashboardPage';
import ChatBotPage from './pages/chatBotPage/chatBotPage';
import Login from './pages/loginPage/Login';
import SignIn from './pages/signInPage/SignIn';
import CommunityPage from './pages/communityPage/communityPage';
import Onboarding from './pages/onboarding/Onboarding';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReportPage from './pages/reportPage/reportPage';
import ProfilePage from './pages/profilePage/profilePage';
import SchedulePage from './pages/schedulePage/schedulePage';


function App() {
  return (
    <>
      <ToastContainer /> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/chatbot' element={<ChatBotPage />}/>
        <Route path='/community' element={<CommunityPage />}/>
        <Route path='/report' element={<ReportPage />}/>
        <Route path='/schedule' element={<SchedulePage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/onboarding' element={<Onboarding />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
