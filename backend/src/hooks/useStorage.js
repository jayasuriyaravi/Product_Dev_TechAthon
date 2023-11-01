import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      // const date = 
      const timee = new Date();
      var month = timee.getMonth()+1;
      var h = timee.getHours();
      var m = timee.getMinutes();
      var date = timee.getDate()+"-"+month+"-"+timee.getFullYear();
      if(h<10)
      {h="0"+h;}
      if(m<10)
      {m="0"+m;}
      var dateandtime = h+":"+m;
      var description = localStorage.getItem("desc");
      var location = localStorage.getItem("loc");
      
      await collectionRef.add({ url, createdAt,dateandtime,date,description,location });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;