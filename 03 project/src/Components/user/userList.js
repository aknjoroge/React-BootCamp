import styles from "./userlist.module.css";
import Card from "../card/card";
function Userlist(props) {
  return (
    <Card>
      <div className={styles.users}>
        <ul>
          <li>
            {props.name} is {props.age} years old
          </li>
        </ul>
      </div>
    </Card>
  );
}
export default Userlist;
