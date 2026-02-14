import React from 'react'
import toast from 'react-hot-toast';
import Todoservices from '../../src/Services/Todoservices';
const PopModel = ({title,settitle,description,setDescription,showmodal,setShowmodal}) => {
    const handleClose = () => {
        setShowmodal(false);
    };
    const handleSubmit = async () => {
      try {
        console.log("Enter in try block")
        const userData = JSON.parse(localStorage.getItem("todo-app"));
        const createdby = userData && userData.user._id;
        console.log(userData);
        if (!title || !description) {
          return toast.error("Please provide title and description");
        }
    
        const data = { title, description, createdby };
        await Todoservices.createtodo(data);
    
        setShowmodal(false);
        toast.success("Task Created Successfully");
        settitle("");
        setDescription("");
      } catch (error) {
        console.error(error);
        toast.error(error.message||"Task creation failed");
      }
    };


  return (
    <>{showmodal && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog"
               style={{ backgroundColor:'rgba(0,0,0,0.5)' }}>
            
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Add New Task</h5>
                  <button type="button" className="btn-close"
                          onClick={() => setShowmodal(false)} />
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
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary"
                          onClick={handleClose}>Close</button>
                  <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default PopModel