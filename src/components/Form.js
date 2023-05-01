import React, { useState } from 'react';
import Nav from './Nav';
import './Form.css'
import Axios from 'axios';

const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [engineNumber, setEngineNumber] = useState("");
    const [mechanicName, setMechanicName] = useState("");
    // console.log(name);
    // console.log(phone);
    // console.log(regNumber);
    // console.log(engineNumber);
    // console.log(mechanicName);

    const submit_btn = () => {
        Axios.post("http://localhost:5001/create", {name:name, phone:phone, regNumber:regNumber, engineNumber:engineNumber, mechanicName:mechanicName}).then(() => {
        });
      };
    

    return (
        <div>
            
            <div className="mb-3">
                <div className='label-content'>
                <label for="Name" className="form-label label-content my-2">Name</label>
                </div>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write your Name Here" 
                onChange={(e)=> {setName(e.target.value)}}/>
            </div>



            <div className='label-content'>
            <label for="Phone Number" className="form-label my-2">Write down your phone number</label>
            </div>
            <div className="mb-3"> 
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="+880XXXXXXXXXXX"
                onChange={(e) => {setPhone(e.target.value)}} />
            </div>

            <div className="mb-3">
                <div className='label-content'>
                <label for="exampleFormControlInput1" className="form-label my-2">Write down your Registration Number</label>
                </div>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Car Registration Number"
                onChange={(e) => {setRegNumber(e.target.value)}} />
            </div>


            <div className="mb-3">
                <div className='label-content'>
                <label for="exampleFormControlInput1" className="form-label my-2">Please enter your engine Number</label>
                </div>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Car Engine Number"
                onChange={(e) => {setEngineNumber(e.target.value)}} />
            </div>



           <div className='label-content'>
           <label for="exampleFormControlInput1" className="form-label my-2">Please Select Your Mechanic</label>
            </div>
            <select class="form-select" placeholder="Select Your Mechanic" onChange={(e) => {setMechanicName(e.target.value)}} >
                <option value="Tony Stark">Tony Stark</option>
                <option value="Agent Romanoff">Agent Romanoff</option>
                <option value="Hacksmith">Hacksmith</option>
                
            </select>


            


            <button type="button" class="btn btn-primary btn-lg my-4" onClick={submit_btn}>Submit</button>
            
        
        </div>
    );
};

export default Form;