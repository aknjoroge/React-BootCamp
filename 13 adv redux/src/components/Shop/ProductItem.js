import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addTocartCreator } from "./../../store/actionCreators";
const ProductItem = (props) => {
  const items = props.items;
  let dispatch = useDispatch();

  function clickHandler(item) {
    dispatch(addTocartCreator(item));
  }

  return (
    <li className={classes.item}>
      {items.map(function (item, index) {
        return (
          <Card key={index}>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>${item.price.toFixed(2)}</div>
            </header>
            <p>{item.description}</p>
            <div className={classes.actions}>
              <button
                onClick={() => {
                  clickHandler(item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </Card>
        );
      })}
    </li>
  );
};

export default ProductItem;
