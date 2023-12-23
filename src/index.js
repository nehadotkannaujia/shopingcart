import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./app/store"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartConatiner from './pages/CartConatiner';
import Profile from './pages/Profile';
import AddUser from './pages/AddUser';
import AllUsers from './pages/AllUsers';
import RegisterUser from "./pages/RegisterUser"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<HomePage />}></Route>
            <Route path="cart" element={<CartConatiner />}></Route>
            <Route path="register" element={<RegisterUser />}></Route>
            <Route path="profile" element={<Profile />}>
              <Route path="AddUser" element={<AddUser />}></Route>
              <Route index element={<AllUsers />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);

