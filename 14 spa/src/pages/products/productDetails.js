import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

function ProductDetails() {
  let params = useParams();

  return (
    <Fragment>
      <h1>Products Detail</h1>
      <h3> You selected {params.ID} </h3>
      <Link to="/products">Back</Link>
    </Fragment>
  );
}
export default ProductDetails;
