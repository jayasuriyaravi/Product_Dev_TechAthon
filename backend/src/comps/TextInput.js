import React, { useState, useEffect } from 'react';

function TextInput() {
  const [des,setdes] = useState();
  const [loc,setloc] = useState();
  return (
    <div>
        <input onChange={(e)=>{setdes(e)}}/>
        <input onChange={(e)=>{setloc(e)}} />
    </div>
  );
}

export default TextInput;
