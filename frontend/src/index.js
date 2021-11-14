import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Events from './pages/Events';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import MyTickets from './pages/MyTickets';
import EventDetails from './pages/EventDetails';
import Footer from './pages/Footer';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import assetsReducer from './reducers/assets';

const reducer = combineReducers({
  assets:assetsReducer,
 
})
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Login/>
      <SignUp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/mytickets" element={<MyTickets/>}/>
          <Route path="/events/:eventTerm" element={<EventDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);