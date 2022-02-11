import Userlist from "./userList";
function RenderList(props) {
  return props.data.map(function (element) {
    return <Userlist key={element.id} name={element.name} age={element.age} />;
  });
}

export default RenderList;
