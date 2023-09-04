import { useEffect, useState } from "react";
import React from "react";


const AuthContext = React.createContext({
 isLoggedIn : false,
 onLogeout: () => {} ,
 onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
 
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
   const storagelogin = localStorage.getItem('isLoggedIn')

   if (storagelogin === '1') {
     setIsLoggedIn(true);
   }
 }, []);

 const loginHandler = (email, password) => {

   localStorage.setItem('isLoggedIn', '1');
   setIsLoggedIn(true);
 };

 const logoutHandler = () => {
   setIsLoggedIn(false);
 };
  return (<AuthContext.Provider
  value={
   {
    isLoggedIn : isLoggedIn,
    onLogeout: logoutHandler, 
    onLogin: loginHandler
   }
  }
  >
   {props.children}
  </AuthContext.Provider>)
}

export default AuthContext;