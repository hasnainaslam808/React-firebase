
// import {getDatabase,ref,set} from "firebase/database";
import {app} from "./firebase";

import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";

// const db  = getDatabase();

function App() {

// const putData = ()=>{
//   set(ref(db,'users/hasnain'),{
//     id:1,
//     name:'hasnain aslam',
//     age:22,
//   })
// }
  return (
    <div>
  <h1>firebase </h1>
  <Signup/>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <Login/>
  {/* <button onClick={putData} >putData</button> */}
    </div>
  );
}

export default App;
