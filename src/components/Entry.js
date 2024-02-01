import React, { useState } from 'react';
import './Entry.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faScissors, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default function Entry() {
    const [data, setData] = useState([]);
    const [indicator, setIndicator] = useState(false);
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);

    const DoneStyle = {
        backgroundColor: "rgb(164, 235, 117)",
    };
    function handledit(index) {
        console.log(index);
        let value = window.prompt();
        console.log(data[index]);
        const newData = [...data];
        newData[index] = { task: value, date: newData[index].date };
        setData(newData);
    }
    
    function handledone(index) {
        setSelectedTask(index);
    }

    function handledelete(index) {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
        setSelectedTask(null); 
    }

    function handleClick(e) {
        if(task!=='' && date!==''){
            setData((prevData) => [...prevData, { task: task, date: date }]);
            setIndicator(!indicator);
            setTask('');
            setDate('');
        }
        else{
            window.alert("Enter the task correctly")
        }
        
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"40px"}}>

            <div className='input_container'>
                <div className=''>
                    <h3>Enter a new Task</h3>
                </div>
                <div className='input_section'>
                    <div className=''>
                        Enter the task:
                    </div>
                    <div className=''>
                        <input type='text' name='task' value={task} onChange={(e) => { setTask(e.target.value) }}></input>
                    </div>
                </div>
                <div className='input_section'>
                    <div className=''>
                        Enter date:
                    </div>
                    <div className=''>
                        <input type="date" name='date' value={date} onChange={(e) => { setDate(e.target.value) }} placeholder='dd-mm-yy'></input>
                    </div>
                </div>
                <div className='input_section'>
                    <div><button onClick={handleClick}>Submit</button></div>
                </div>
            </div>

            <div className='task_container'>
                <div style={{ textAlign: "center" }}><h1>TASK</h1></div>
                <div className=''>
                    {
                        data.map((d, index) => (
                            <div
                                class="taskValue"
                                style={{ backgroundColor: selectedTask === index ? DoneStyle.backgroundColor : 'inherit' }}
                                key={index}
                            >
                                <div class="value" style={{ display: "flex", flexDirection: "column" }}>
                                    <div><b>{d.task}</b></div>
                                    <div>{d.date}</div>
                                </div>
                                <div class="icons" id="done" onClick={() => handledone(index)}>
                                    <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: "30px" }} />
                                </div>
                                <div class="icons" id="delete" onClick={() => handledelete(index)}>
                                    <FontAwesomeIcon icon={faScissors} style={{ fontSize: "30px" }} />
                                </div>
                                <div class="icons" id="update" onClick={() => handledit(index)}>
                                    <FontAwesomeIcon icon={faPencilAlt} style={{ fontSize: "30px" }} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
