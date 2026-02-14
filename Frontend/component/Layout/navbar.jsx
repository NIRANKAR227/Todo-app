import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {
  const [username,setUsername]=useState('');
  const navigate=useNavigate();
  //Get userName
  useEffect(()=>{
    const userdata=JSON.parse(localStorage.getItem('todo-app'))
    console.log("username data==>"+userdata&& userdata.user.username);
    setUsername(userdata&& userdata.user.username);
  },[])

  //logout function
  const logouthandler=()=>{
    localStorage.removeItem("todo-app");
    toast.success("Logout successfully");
    navigate("/")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <h4 className="navbar-brand"><i className="fa-solid fa-user"></i></h4>
            <b><i>WELCOME {username}</i></b>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* changed me to ms to change positionfrom left to right */}
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/to-dolist" style={{ color: "black" }}>My todo list</Link>
              </li>
              <li className='"nav-item' >
                <button className='nav-link' title='logout' onClick={logouthandler}>
                  <i class="fa-solid fa-arrow-right-from-bracket fa-2x"></i>
                </button>
                
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar