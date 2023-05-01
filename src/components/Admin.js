import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Axios from 'axios';
import './Admin.css'

const Admin = () => {
  const[userData, setUserData] = useState([]);
  const[editMechanic, setEditMechanic]= useState('');
  const[oldName, setOldName ] = useState([]);
  console.log(oldName);
  



  const addMechanic = () => {
    Axios.put("http://localhost:5001/update", { 
    oldName:oldName, 
    editMechanic:editMechanic
  });
  setEditMechanic("");
  };

  
  const [deleteName, setDeleteName] = useState('');
  console.log(deleteName);
 
  const deleteUser = () => {
    Axios.put("http://localhost:5001/delete", { 
    deleteName:deleteName
  });
  setDeleteName("");
  };

  useEffect(()=>{
    Axios.get("http://localhost:5001/get").then((response) => {
      setUserData(response.data);
    })

  }, []);
 
    return (
        <div className='mb-5'>
            <Nav></Nav>


<div>
            <table class="table table-primary my-5 container w-70">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Car License Number</th>
      <th scope="col">Car Engine Number</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Appointment Date</th>
      <th scope="col">Mechanic Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>      
      <th style={{ height: '500px' }} scope="row">1</th>
      <td>{userData.map((val) => {
  return <p>Name: {val.name} 
   </p>   
})} </td>


      <td >
        {userData.map((val)=> {
          return <p>{val.regNumber}</p>
        })}
      </td>
       


      <td>
      {userData.map((val)=> {
          return <p>{val.engineNumber}</p>
        })}
      </td>



      <td>
      {userData.map((val)=> {
          return <p>{val.phone}</p>
        })}
      </td>




      <td>
     
      </td>


      <td>
      {userData.map((val)=> {
          return <p>{val.mechanicName}  </p>
        })}
      </td>



      <td>
      {userData.map((val)=> {
          return <p>{} <select className="form-select my-select" placeholder="Change Mechanic" onChange={(e)=> {setEditMechanic(e.target.value)} } onClick={(e)=> {setOldName(val.name)} } >
          <option  value="val.mechanicName">{val.mechanicName}</option>
          <option value="Tony Stark">Tony Stark</option>
          <option value="Agent Romanoff">Agent Romanoff</option>
          <option value="Hacksmith">Hacksmith</option>          
      </select> </p>
        })}
      </td>


      <td>
      {userData.map((val)=> {
          return <p>{} <button className='btn btn-primary my-select' onClick={(e) => {setDeleteName(val.name)}}>Delete</button> </p>
        })}
      </td>


    </tr>
    
  </tbody>
</table>

<div>
<button type="button" class="btn btn-primary btn-lg my-5 m-5" onClick={addMechanic}>Add Mechanic</button>
<button type="button" class="btn btn-primary btn-lg my-4">Assign</button>




{/* {name.map((val) => {
  return <h1>Name: {val.name} || PhoneNo: {val.phone}</h1>
})} */}



</div>
        </div>

        </div>
       
    );
};

export default Admin;