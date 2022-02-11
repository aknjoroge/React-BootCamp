import React, { useEffect, useCallback, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useApi from "./hooks/useApi";

function App() {
  const [tasks, setTasks] = useState([]);

  let dataCallback = useCallback(function (apiData) {
    const loadedTasks = [];

    for (const taskKey in apiData) {
      // let txts = JSON.parse(apiData[taskKey]);
      loadedTasks.push({ id: taskKey, text: apiData[taskKey].text });
      // let txts = JSON.parse(apiData[taskKey]);
      // loadedTasks.push({ id: taskKey, text: txts.text });
    }

    setTasks(loadedTasks);
  }, []);

  let { error, isLoading, fetchTasks } = useApi(dataCallback);

  useEffect(() => {
    fetchTasks({
      endPoint: "tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
