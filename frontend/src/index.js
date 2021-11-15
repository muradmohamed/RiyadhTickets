import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactUs from './pages/ContactUs';
import MyTickets from './pages/MyTickets';
import EventDetails from './pages/EventDetails';
import Footer from './components/Footer';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import assetsReducer from './reducers/assets';
import Context from './context';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8080";

const reducer = combineReducers({
  assets:assetsReducer,
 
})
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Context>

    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Login/>
      <SignUp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/mytickets" element={<MyTickets/>}/>
          <Route path="/events/:id" element={<EventDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  
    </Context>
</React.StrictMode>,
  document.getElementById('root')
);