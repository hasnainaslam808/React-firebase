import React ,{ useState }  from 'react'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import{app} from "../firebase"

const auth =getAuth(app);

const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
   


    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              
                alert("Login successful");
            })
            .catch((error) => {
               
                alert(error.message);
            });
    }
  return (
  
        <>
        <h1>Log In</h1>
            <form style={{margin:'20px'}}>
                <div className="form-group " >
                    <label >Email </label><br></br>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email"    placeholder="Enter email address"/>
                       
                </div>
                <div className="form-group">
                    <label >Password</label><br></br>
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password"   placeholder="Password"/>
                </div>
             <br></br>
                <button type="submit" className="btn btn-primary" onClick={signin}>Submit</button>
                <button>Continue with google</button>
            </form>

        </>
    )
}



export default Login