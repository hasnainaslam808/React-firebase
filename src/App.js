
// import {getDatabase,ref,set} from "firebase/database";
import {app} from "./firebase";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect, useState } from "react";

// const db  = getDatabase();
const auth=getAuth(app);
function App() {
const [user,setUser]=useState(null);
// const putData = ()=>{
//   set(ref(db,'users/hasnain'),{
//     id:1,
//     name:'hasnain aslam',
//     age:22,
//   })
// }

useEffect(()=>{
  onAuthStateChanged(auth,user=>{
    if(user){
      setUser(user);
    }
    else{
      setUser(null);
    }
  })
},[])

if(user === null){
  return(
    <div>
    <h1>firebase </h1>
    <Signup/>
    <br></br>
    <br></br>
    <br></br>
    <Login/>
    {/* <button onClick={putData} >putData</button> */}
      </div>
  )
}
  return (
    <div>
  <h1>firebase </h1>
<h1>hello{user.email}</h1>

<button className="btn btn-warning" onClick={()=> signOut(auth)} >log out</button>
  {/* <button onClick={putData} >putData</button> */}
    </div>
  );
}

export default App;
