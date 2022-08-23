import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Login } from './pages/Login'
import { Role } from './pages/Role/role-list/Role'
import { Profile } from './pages/Profile'
import { RoleCreate } from './pages/Role/role-create/Role-create';
import { RoleUpdate } from './pages/Role/role-update/Role-update';


const Main = () => <Outlet />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='login' element={<Login />} index />
        <Route path='roles' element={<Role />} />
        <Route path='roles/create' element={<RoleCreate />} index />
        <Route path='roles/:roleId' element={<RoleUpdate />} />
        <Route path='profiles' element={<Profile />} index />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
