import Task from "./Task"

function Tasks({ tasks, onDeleteTask, onToggleStatus }) {

    return (
        <div className="mt-4">
            {tasks.map(task => (
                <Task key={task.id} onDelete={onDeleteTask} task={task} onToggle={onToggleStatus} />
            ))}
        </div>
    )
}

export default Tasks
