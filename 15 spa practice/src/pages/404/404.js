import { Fragment } from "react";
import Card from "../../components/UI/Card";

function NotFound() {
  return (
    <Fragment>
      <Card>
        <div className="centered">
          <h1>404</h1>
          <h2>Not Found</h2>
        </div>
      </Card>
    </Fragment>
  );
}

export default NotFound;
