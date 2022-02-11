import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";

// import classes from "./Users.module.css";
import classes from "./UserFinder.module.css";
import appContext from "../store/content";

class UserFinder extends Component {
  static contextType = appContext;
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      filteredUsers: [],
    };
  }

  searchChangeHandler = (event) => {
    this.setState((prevData) => {
      return {
        searchTerm: event.target.value,
      };
    });
  };
  resetData = (event) => {
    this.setState((prevDAta) => {
      return {
        filteredUsers: this.context.users,
      };
    });
  };

  componentDidMount() {
    this.setState((prevDAta) => {
      return {
        filteredUsers: this.context.users,
      };
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm != this.state.searchTerm) {
      this.setState((prevData) => {
        return {
          filteredUsers: this.state.filteredUsers.filter((user) =>
            user.name.includes(this.state.searchTerm)
          ),
        };
      });
    }
  }

  render() {
    return (
      <appContext.Consumer>
        {(data) => {
          return (
            <div style={{ textAlign: "center" }}>
              <input
                className={classes.finder}
                type="search"
                onChange={this.searchChangeHandler.bind(this)}
              />
              <button onClick={this.resetData.bind(this)}>refresh</button>
              <Users users={this.state.filteredUsers} />
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");
// useEffect(() => {
//   setFilteredUsers(
//     DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//   );
// }, [searchTerm]);
// const searchChangeHandler = (event) => {
//   setSearchTerm(event.target.value);
// };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <input
//         className={classes.finder}
//         type="search"
//         onChange={searchChangeHandler}
//       />
//       <Users users={filteredUsers} />
//     </div>
//   );
// };

export default UserFinder;
