
const Task = ({ onDelete, onToggle, task }) => {
    return (
        <div className={`bg-light p-3 my-2 rounded border ${task.status ? 'border-success-subtle' : 'border-danger-subtle'}`} onDoubleClick={() => onToggle(task.id)} title="On double click, the task status will toggle">
            <div className="hstack justify-content-between">
                <h5 className="mb-1 text-capitalize" title="Task Title">
                    {task.title}
                </h5>

                <button className="btn" title="Delete Task" onClick={() => onDelete(task.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash2-fill" viewBox="0 0 16 16" title="Delete Task">
                        <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" title="Delete Task" />
                    </svg>
                </button>
            </div>
            <p className="lead mb-2" title="Task Description">
                {task.description}
            </p>

            <button 
            className={`btn ${task.status ? 'btn-outline-success' : 'btn-outline-danger'} text-uppercase fw-semibold`} title={`Task Status: ${task.status ? 'Completed' : 'Pending'}`}
            onClick={() => onToggle(task.id)}
            >
                {task.status ? 'Completed' : 'Pending'}
            </button>

        </div>
    )
}

export default Task
