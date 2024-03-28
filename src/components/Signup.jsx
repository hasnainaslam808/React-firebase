import React, { useState } from 'react';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import{app} from "../firebase"

const auth =getAuth(app);
const Signup = () => {
 const [email,setEmail]= useState("");
 const [password,setPassword]= useState("");

 
 const createUser = ()=>{
createUserWithEmailAndPassword(auth,email,password).then(value => alert("successful")).catch(err => alert("error: " + err))
 }


    return (
        <>
        <h1>SignUp</h1>
            <form style={{margin:'20px'}}>
                <div className="form-group " >
                    <label >Email </label><br></br>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email"  id="exampleInputEmail1"  placeholder="Enter email address"/>
                       
                </div>
                <div className="form-group">
                    <label >Password</label><br></br>
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password"  id="exampleInputPassword1" placeholder="Password"/>
                </div>
             <br></br>
                <button type="submit" className="btn btn-primary" onClick={createUser}>Submit</button>
            </form>

        </>
    )
}

export default Signup