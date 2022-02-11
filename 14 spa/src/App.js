import { Redirect, Route } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/header/header";
import ProductDetails from "./pages/products/productDetails";
import Products from "./pages/products/products";
import Welcome from "./pages/welcome/welcome";

function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:ID">
        <ProductDetails></ProductDetails>
      </Route>
    </Fragment>
  );
}

export default App;
