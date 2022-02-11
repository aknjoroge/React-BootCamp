import { Fragment } from "react";
import Header from "./header";

function Layout(props) {
  console.log(props.children.length);
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

export default Layout;
