import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

function Welcome(params) {
  return (
    <Fragment>
      <h2>Hallo Welcome</h2>
      <Link to="/welcome/info"> Get info</Link>
      <Route path="/welcome/info">
        <h4>Hi this is extra info</h4>
        <Link to="/welcome"> Hide info</Link>
      </Route>
    </Fragment>
  );
}

export default Welcome;
