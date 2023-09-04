import React, { useContext, useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/context/auth-context';

function App() {
    const cxt = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!cxt.isLoggedIn && <Login />}
        {cxt.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
