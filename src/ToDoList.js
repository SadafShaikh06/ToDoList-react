import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './ToDoList.css';

const ToDoList = () => {

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleSubmit = () => {
        setTaskList([...taskList, task]);

        //Here we clear our input
        setTask('')
    }

    const handleDeleteTask = (i) => {
        setTaskList(taskList.filter((task, index) => index !== i));
        //or
        // const taskArray = [...taskList];
        // taskArray.splice(i, 1)
        // setTaskList(taskArray)
    }

    return (
        <div className='task-container'>
            <div className='heading'>To Do List</div>
            <div className='list-flex'>
                {taskList.length < 1 && "Add To Do's!"}
                {taskList.map((task, i) => {
                    return (
                        <div
                            className='list-container'
                            key={i}
                        >
                            <div className='toDoList'>
                                {`${i + 1}. ${task}`}
                            </div>

                            <div>
                                <FaTrash
                                    className="fa-solid fa-trash"
                                    onClick={() => handleDeleteTask(i)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            <input
                type='text'
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className='list-input'
                placeholder='Enter Task'
            />
            <button
                className='btn'
                onClick={handleSubmit}
                disabled={!task.trim()}
            >
                Add Task
            </button>
            <button
                className='btn'
                onClick={() => setTaskList([])}
                disabled={!taskList.length > 0}
            >
                Clear List
            </button>
        </div >
    )
}

export default ToDoList;