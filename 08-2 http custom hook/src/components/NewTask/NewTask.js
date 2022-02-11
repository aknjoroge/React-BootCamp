import useApi from "../../hooks/useApi";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

let taskText;
const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  function dataCallback(apiData) {
    const generatedId = apiData.name; // firebase-specific => "name" contains generated id

    console.log("TC-88", taskText);
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  let { error, isLoading, fetchTasks } = useApi(dataCallback);

  const enterTaskHandler = async (newTExt) => {
    taskText = newTExt;
    fetchTasks({
      endPoint: "tasks.json",
      method: "POST",
      body:{ text: newTExt },
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     "https://react-http-6b4a6.firebaseio.com/tasks.json",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Request failed!");
    //   }
    //   const data = await response.json();
    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };
    //   props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || "Something went wrong!");
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
