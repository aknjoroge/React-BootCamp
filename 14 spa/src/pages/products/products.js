import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

function Products(params) {
  return (
    <Fragment>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/apple">Apple</Link>
        </li>
        <li>
          <Link to="/products/mango">Mango</Link>
        </li>
        <li>
          <Link to="/products/banana">Banana</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Products;
