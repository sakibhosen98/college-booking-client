import { useEffect, useState } from "react";

const Practice = () => {
  const [data, setData] = useState([]);

  useEffect( ()=> {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return (
    <div>
      <h2>Hello world: {data.length}</h2>
    </div>
  );
};

export default Practice;