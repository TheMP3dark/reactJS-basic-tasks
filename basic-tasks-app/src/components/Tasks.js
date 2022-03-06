import Task from './Task';

const Tasks = ({taskList, removeTask, toggleReminder}) => {
    return (
        <div>
            {taskList.map((task) => 
            <Task 
                key={task.id} 
                task={task}
                removeTask={removeTask}
                toggleReminder={toggleReminder}
            />)}
        </div>
    )
}

export default Tasks;