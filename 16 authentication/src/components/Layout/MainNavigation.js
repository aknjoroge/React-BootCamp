import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actionCreator";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  let dispatch = useDispatch();

  function logoutHandler(event) {
    event.preventDefault();
    dispatch(logout());
  }

  let loggedin = useSelector(function (store) {
    return store.loggedIn;
  });
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>{!loggedin && <Link to="/auth">Login</Link>}</li>
          {loggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {loggedin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
