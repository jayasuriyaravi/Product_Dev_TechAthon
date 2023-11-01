import React from 'react';
import {
  useParams
} from "react-router-dom";
const Title = () => {
  let { id } = useParams(); 
  const local_St=()=>{
    localStorage.setItem('desc', document.getElementById("one").value);
    localStorage.setItem('loc', document.getElementById("two").value);
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
  }
  return (
    <div className="title">
      {/* <h1>FireGram</h1> */}
      <h2>your Gallery</h2>
      <p>Welcome, {id}</p>
      <input id="one" placeholder='description'/>
      <input id="two" placeholder='location'/>
      <button onClick={local_St}>submit</button>
    </div>
  )
}

export default Title;