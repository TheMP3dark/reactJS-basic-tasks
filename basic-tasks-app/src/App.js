import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import taskListObject from "./data/task-list";

const App = () => {
  
  const [taskList, setTaskList] = useState(taskListObject);
  
	const onRemoveTask = (id) =>
  setTaskList((taskList) => taskList.filter((task) => task.id !== id));
  
  const onSetReminder = (id) =>
  setTaskList((taskList) => taskList.map((task) => 
    task.id === id ?
    {...task, reminder: !task.reminder} :
      task
  ))

  return (
		<div>
			<Header text="Tasks" />
			<Tasks 
        taskList={taskList} 
        removeTask={onRemoveTask}
        toggleReminder={onSetReminder}
      />
		</div>
	);
};

export default App;
