import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

const Profile = () => {
  const params = useParams<'*'>();
  const some = params["*"];
  console.log(some);

  return (
    <div>profile</div>
  )
}

function App() {
  return (
    <div className="App">
      <NavLink to={'/'}>main</NavLink>---
      <NavLink to={'/login'}>login</NavLink>---
      <NavLink
        to={'/profile'}
        style={(params) => {
          return {color: params.isActive ? 'lime' : 'black'}
        }}
      >
        profile
      </NavLink>---
      <NavLink
        to={'/profile/settings'}
        className={({isActive}) => isActive ? 'myActive' : 'default'}
      >
        settings
      </NavLink>---

      <a
        href={'https://dzen.ru/?yredirect=true'}
        target={'_blank'}
        rel={'noreferrer nofollow noopener'}
      >
        xxx---
      </a>
      {/*<NavLink to={'/profile/1'}>profile/01</NavLink>---*/}

      <Routes>
        <Route path={'/*'} element={<div>404</div>}/>
        <Route path={'/'} element={<div>main</div>}/>
        <Route path={'/login'} element={<div>login</div>}/>
        <Route path={'/profile/'} element={<div>profile</div>}/>
        <Route path={'/profile/settings'} element={<div>settings</div>}/>
      </Routes>
    </div>
  );
}

export default App;
