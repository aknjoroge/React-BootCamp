import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  let loggedin = useSelector(function (store) {
    return store.authReducer.loggedin;
  });
  return (
    <Fragment>
      <Header />
      {!loggedin && <Auth />}
      {loggedin && <UserProfile />}
      <Counter />;
    </Fragment>
  );
}

export default App;
