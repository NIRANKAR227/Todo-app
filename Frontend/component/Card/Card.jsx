import React, { useState } from 'react'
import EditTodo from '../Layout/edittodo';

import Todoservices from '../../src/Services/Todoservices';
import DeleteTodo from '../Layout/deletetode';

const Card = ({ alltask,getusertask }) => {
  const [editTask, setEditTask] = useState(null);
  const [deletetodo,setDeletetodo]=useState(null);

  const handledelete=({task})=>{
    console.log(task)
    setDeletetodo(task)
  }
  
  return (
    <><div className='todo-grid'>
        {alltask?.map((task, i) => (
          
          <div key={i} className="card border-primary mb-3 mt-3" style={{maxWidth:'18rem'}}>
            <div className="card-header">
              <div className="chead">
                <h6>{task?.title.substring(0,12)}</h6>
                <h6 className={task?.iscompleted===true?'task-cmp':'task-incmp'}>{task?.iscompleted===true?'completed':'Incomplete'}</h6>
              </div>
            </div>
            <div className="card-body">
              <h6 style={{fontWeight:"bold"}}>{task?.title}</h6>
              <p className="card-text">{task?.description}</p>
              <h6 style={{ fontWeight: "normal" }}>Date: {new Date(task?.createdAt).toLocaleDateString("en-IN")}</h6>
            </div>
            <div className='card-footer bg-transparent border-primary'>
              <button className='btn btn-warning' title="Edit Task" onClick={() => setEditTask(task)}>
                  <i className='fa-solid fa-pen-to-square fa-xs'></i>
              </button>
              <button className='btn btn-danger ms-1' title="Delete Task" onClick={()=>handledelete({task})}>
                  <i className='fa-solid fa-trash fa-xs'></i>
              </button>
            </div>
            
          </div>
        ))}
        </div>
        {editTask && <EditTodo task={editTask} setEditTask={setEditTask} getusertask={getusertask} />}
        {deletetodo && <DeleteTodo task={deletetodo} setDeletetodo={setDeletetodo} getusertask={getusertask} />}
    </>
  );
};


export default Card