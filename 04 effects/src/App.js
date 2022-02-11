import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Appcontext from "./context-storage/auth-storage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogedIn", "1");
    setIsLoggedIn(true);
  };

  useEffect(function effect() {
    if (localStorage.getItem("isLogedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLogedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Appcontext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </Appcontext.Provider>
    </React.Fragment>
  );
}

export default App;
