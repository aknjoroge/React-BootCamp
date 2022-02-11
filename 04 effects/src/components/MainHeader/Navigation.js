import React from "react";
import classes from "./Navigation.module.css";
import Appcontext from "../../context-storage/auth-storage";
import { useContext } from "react";

const Navigation = (props) => {
  // CONTEXT HOOKS
  let contextData = useContext(Appcontext);
  return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
/*
CONTEXT CONSUMER
const Navigation = (props) => {
  return (
    <Appcontext.Consumer>
      {(contextData) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {contextData.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {contextData.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {contextData.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </Appcontext.Consumer>
  );
};
*/
export default Navigation;
