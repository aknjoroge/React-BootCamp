import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { autoLogin } from "./store/actionCreator";

/*make everythinh work
login
pretect routes
autologout after some time
*/

function App() {
  let dispatch = useDispatch();
  let loggedin = useSelector(function (store) {
    return store.loggedIn;
  });

  useEffect(function () {
    let persistentToken = localStorage.getItem("Token");
    if (persistentToken) {
      dispatch(autoLogin(persistentToken));
    }
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {!loggedin && <Redirect to="/auth" />}
          {loggedin && <HomePage />}
        </Route>
        <Route path="/auth">
          {loggedin && <Redirect to="/" />}
          {!loggedin && <AuthPage />}
        </Route>
        <Route path="/profile">
          {loggedin && <UserProfile />}
          {!loggedin && <Redirect to="/auth" />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
