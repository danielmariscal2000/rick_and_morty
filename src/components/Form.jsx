import React from "react";
import {validate} from "./validation"
export default function Form() {
    const [userData,setUserData]=React.useState({
        username:"",
        password:""
    });
    const [error,setError]=React.useState({
        username:"",
        password:""
    })
    const handleInputChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        });
        setError(
          validate({
            ...userData,
            [e.target.name]:e.target.value
          })
        )
    }
  return (
    <>
    <form>
      <div>
        <label type="text">Username</label>
        <input name="username" type="text" value={userData.username} onChange={handleInputChange}/>
        <p>{error.username}</p>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="text" value={userData.password} onChange={handleInputChange}/>
        <p>{error.password}</p>
      </div>
      <button>Enviar</button>
    </form>
    </>
  );
}
