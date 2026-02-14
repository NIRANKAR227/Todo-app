import React ,{useState} from 'react'
import toast, { CheckmarkIcon } from 'react-hot-toast';
import Todoservices from '../../src/Services/Todoservices';

const EditTodo = ({task,setEditTask,getusertask}) => {
    const [title,settitle]=useState(task?.title);
    const [description,setDescription]=useState(task?.description);
    const [iscompleted,setIscompleted]=useState(task?.iscompleted??false);
    console.log(iscompleted);

    const handleClose=()=>{
      setEditTask(null)
    }

    const id=task?._id;
    const handleUpdate=async()=>{
      try {
        console.log("Enter in try block")
        const userData = JSON.parse(localStorage.getItem("todo-app"));
        
        console.log(userData);
        if (!title || !description) {
          return toast.error("Please provide title and description");
        }
    
        const data = { title, description,iscompleted };
        await Todoservices.updatetodo(id,data);
    
        setEditTask(null);
        toast.success("Task Updated Successfully");
        settitle("");
        setDescription("");
        getusertask();
      } catch (error) {
        console.error(error);
        toast.error(error.message||"Task creation failed");
      }
    }
  return (
    <>
      {task && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog"
               style={{ backgroundColor:'rgba(0,0,0,0.5)' }}>
            
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Add New Task</h5>
                  <button type="button" className="btn-close"
                          onClick={() => setEditTask(null)} />
                </div>

                <div className="modal-body">
                  <input className="form-control mb-3"
                         placeholder="Title"
                         value={title}
                         onChange={e=>settitle(e.target.value)} />

                  <textarea className="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={e=>setDescription(e.target.value)} />
                  <div className='my-3'>
                    <select className='form-select' 
                            onChange={(e) => setIscompleted(e.target.value === "true")}>
                      <option selected>Select Task</option>
                      <option value={true}>Completed</option>
                      <option value={false}>Incomplete</option>
                    </select>
                    
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary"
                          onClick={handleClose}>Close</button>
                  <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                </div>
                
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default EditTodo