import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Login } from './pages/Login'
import { Role } from './pages/Role/role-list/Role'
import { Profile } from './pages/Profile'
// import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
// import Invoice from "./routes/invoice";

const Main = () => <Outlet />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} >
        <Route path='login' element={<Login />} index />
        <Route path='roles' element={<Role />} index />
        <Route path='profiles' element={<Profile />} index />


      </Route>
    </Routes>

    {/* <Routes>
      <Route path="/" element={<App />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={
            <main style={{padding: "1rem"}} >
              <p>Select an invoice</p>
            </main>
          } 
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route 
          path="*"
          element={
            <main style={{padding: "1rem"}}>
              <p>Nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
