import { useState } from "react";

const ToDoList = () => {
    let [task, setTask] = useState("");  // array destructuring
    let [taskArray, setTaskArray] = useState([]);
    
    let clickHandler = () => {
        if (task.trim()) {  // check if the task is not an empty string
            setTaskArray([...taskArray, task]);
            setTask("");  // clear the input field
        }
    }

    let onChangeHandler = (event) => {
        setTask(event.target.value);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    value={task}
                    onChange={onChangeHandler}
                />
            </div>
            
            <button onClick={clickHandler}>Add Task</button><br /><br />
            <ol>
                {taskArray.map((elem, index) => {
                    return <li key={index}>{elem}</li>
                })}
            </ol>
        </>
    );
}

export default ToDoList;
