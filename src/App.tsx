import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink to={'/profile'}>profile</NavLink>---
      <NavLink to={'/profile/settings'}>settings</NavLink>

      <Routes>
        <Route path={'/*'} element={<div>404</div>}/>
        <Route path={'/'} element={<div>main</div>}/>
        <Route path={'/login'} element={<div>login</div>}/>
        <Route path={'/profile'} element={(
          <div>
            profile

            <Outlet/>
          </div>
        )}>
          <Route path={'/profile/settings'} element={<div>settings</div>}/>
          <Route path={'*'} element={<div>profile page not found</div>}/>
          <Route path={':id'} element={<div>id</div>}/>
          <Route index element={<div>check id</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
