import React, { Component, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./List.css";

// class List extends Component {
//   state = {
//     items: [1, 2, 3],
//   };

//   //   addItemHandler = () => {
//   //     this.setState((prevState) => {
//   //       return {
//   //         items: prevState.items.concat(prevState.items.length + 1),
//   //       };
//   //     });
//   //   };

//   //   removeItemHandler = (selIndex) => {
//   //     this.setState((prevState) => {
//   //       return {
//   //         items: prevState.items.filter((item, index) => index !== selIndex),
//   //       };
//   //     });
//   //   };

//   render() {
//     const listItems = this.state.items.map((item, index) => (
//       <li
//         key={index}
//         className="ListItem"
//         onClick={() => this.removeItemHandler(index)}
//       >
//         {item}
//       </li>
//     ));

//     return (
//       <div>
//         <button className="Button" onClick={this.addItemHandler}>
//           Add Item
//         </button>
//         <p>Click Item to Remove.</p>
//         <ul className="List">{listItems}</ul>
//       </div>
//     );
//   }
// }

function List() {
  let [items, setitems] = useState([1, 2, 3]);

  function addItemHandler() {
    setitems((prevState) => {
      return prevState.concat(prevState.length + 1);
    });
  }

  function removeItemHandler(selIndex) {
    setitems((prevState) => {
      return prevState.filter((item, index) => index !== selIndex);
    });
  }

  const listItems = items.map((item, index) => (
    <CSSTransition
      timeout={300}
      unmountOnExit
      mountOnEnter
      classNames="fade-in"
      key={index}
    >
      <li className="ListItem" onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup className="List" component="ul">
        {listItems}
      </TransitionGroup>
    </div>
  );
}

export default List;
