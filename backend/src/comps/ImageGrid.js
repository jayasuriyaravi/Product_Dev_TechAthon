import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
// import { doc, deleteDoc } from "firebase/firestore";

// import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  console.log(docs);
  
  const [filter,setfilter] = useState('');

  const searchText = (event)=>{
    setfilter(event.target.value);
  }
  let dataSearch1 = docs.filter(item =>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  });
  // const fun1 = async(a)=>{
  //   await deleteDoc(doc(db, "images", a));
  // }

  return (
    // <div className="img-grid">
    //   {docs && docs.map(doc => (
    //     <div key={doc.id} 
    //     >
          
    //       <img src={doc.url} style={{height:'200px',width:'auto'}} alt="uploaded pic"/>
    //       <p>{doc.date}</p>
    //       <p>{doc.dateandtime}</p>
    //     </div>
    //   ))}
    <div>
      <input id="search_input" value={filter} placeholder="seach...." onChange={searchText.bind(this)}></input>
    <div className="img-grid">
      
      {dataSearch1 && dataSearch1.map(doc => (
        <div key={doc.id}>
          
          <img src={doc.url} style={{height:'200px',width:'auto'}} alt="uploaded pic"/>
          <p>{doc.description}</p>
          <p>{doc.location}</p>
          <p>{doc.date}</p>
          <p>{doc.dateandtime}</p>
          <button onClick={() => setSelectedImg(doc.url)}>view image</button>
          <button>delete**not working**</button>
        </div>
      ))}
      
    </div>
    </div>
  )
}

export default ImageGrid;