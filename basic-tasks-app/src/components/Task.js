import PropTypes from "prop-types";
import './../App.css'

const Tasks = ({task, removeTask, toggleReminder}) => {
    return (
        <div 
            className={task.reminder ? 'reminder' : ''} 
            onDoubleClick={() => toggleReminder(task.id)}
        >
            <h3>{task.content}</h3>
            <h5>{task.day}</h5>
            <button onClick={() => removeTask(task.id)}>Remove</button>
        </div>
    )
}

Tasks.propTypes = {
    removeTask: PropTypes.func,
}

export default Tasks;