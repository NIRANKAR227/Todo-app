import React, { useEffect, useState,useCallback } from 'react'
import Navbar from '../../component/Layout/navbar';
import '../../src/App.css'
import PopModel from '../../component/Layout/PopModel';
import Todoservices from '../../src/Services/Todoservices';
import Card from '../../component/Card/Card';


const HomePage = () => {
  const [showmodal,setShowmodal]=useState(false);
  const [title,settitle]=useState("");
  const [description,setDescription]=useState("");
  const [alltask,setAlltask]=useState([]);
  const [searchQuery,setSearchQuery]=useState("");



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
    getusertask();
  },[getusertask])

  //handle model
  const openModelhandler=()=>{
    setShowmodal(true)
  }
  const handleSearch=(e)=>{
    const query=e.target.value;
    let filterlist=alltask?.filter((item)=>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query)
    if(query && filterlist.length>0){
      setAlltask(filterlist && filterlist)
    }else{
      getusertask();
    }
  }
  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='add-task'>
          <h1>Your Task</h1>
          <input type='search' placeholder='search your task' value={searchQuery} 
            onChange={handleSearch}/>
          <button className='btn btn-primary'onClick={openModelhandler}>Create Task</button>
        </div>
        {alltask&&<Card alltask={alltask} getusertask={getusertask} />}
      </div>
      
      {/*===========popup modal=================*/}
      <PopModel       
      showmodal={showmodal}
      setShowmodal={setShowmodal}
      title={title}
      settitle={settitle}
      description={description}
      setDescription={setDescription}/>
    </>
  )
}

export default HomePage