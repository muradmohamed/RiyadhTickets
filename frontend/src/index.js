import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Events from './pages/Events';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ContactUs from './pages/ContactUs';
import MyTickets from './pages/MyTickets';
import EventDetails from './pages/EventDetails';
import Footer from './pages/Footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/mytickets" element={<MyTickets/>}/>
        <Route path="/events/:eventTerm" element={<EventDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);