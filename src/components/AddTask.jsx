import { useState } from "react"

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('')
    const [description, setDescrip] = useState('')
    const [status, setStatus] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        onAddTask({title, description, status})

        setTitle('')
        setDescrip('')
        setStatus(false)
    }

    return (
        <form className='mt-3' onSubmit={onSubmit}>
            <div className="form-floating mb-3">
                <input type="title" className="form-control" id="floatingTitle" placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} required />
                <label htmlFor="floatingTitle">Task Title</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" className="form-control" id="floatingDescription" placeholder="description" value={description} onChange={e => setDescrip(e.target.value)} required />
                <label htmlFor="floatingDescription">Task Description</label>
            </div>
            <div className="hstack">
                <input className="form-check-input me-2" type="checkbox" checked={status} value={status} onChange={e => setStatus(e.currentTarget.checked)} id="flexCheck" style={{width: '24px', height: '24px'}} />
                <label className="form-check-label" htmlFor="flexCheck">
                    Completed
                </label>
            </div>

            <button className="btn btn-primary mt-3 w-100 fw-semibold">ADD TASK</button>
        </form>
    )
}

export default AddTask
