import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../../component/Layout/navbar'
import Todoservices from '../../src/Services/Todoservices'

const TodoList = () => {
  const [todoStatus,setTodostatus]=useState('')
  const [filterTask,setFilterTask]=useState([])
  const [alltask,setAlltask]=useState([]);

  const userData=JSON.parse(localStorage.getItem('todo-app'))
    
  const id=userData&&userData.user._id;
    
  const getusertask = useCallback(async () => {
    try {
      const res = await Todoservices.getalltodo(id);
      setAlltask(res.data.todos);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  useEffect(()=>{
    const incomplete=alltask?.filter((item)=>item.iscompleted===false);
    const complete=alltask?.filter((item)=>item.iscompleted===true);
    if(todoStatus==="complete"){
      setFilterTask(complete)
    }else if(todoStatus==="incomplete"){
      setFilterTask(incomplete)
    }
    getusertask();
  },[todoStatus])
  return (
    <div>
      <Navbar/>
      <div className="filter-container">
        <h4>Filter Todos By:{todoStatus}</h4>
        <div className="filter-group">
          <select className='filter-group' onChange={(e)=>setTodostatus(e.target.value)}>
            <option selected>Select Status</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>
      </div>
      <div className='todo-container'>
      <div className='todo-grid'>
        {filterTask?.length===0?(<h1 className='No-Task'>No task Found</h1>): filterTask?.map((task, i) => (
          
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
          </div>
        ))}
        </div></div>
    </div>
  )
}

export default TodoList