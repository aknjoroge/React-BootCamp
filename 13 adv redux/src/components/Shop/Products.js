import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  let dispatch = useDispatch();
  let items = useSelector(function (store) {
    return store.items.data;
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem items={items} />
      </ul>
    </section>
  );
};

export default Products;
