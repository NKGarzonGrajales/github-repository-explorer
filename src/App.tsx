import { useState, useEffect } from "react";

function App(){
 const [username,  setUsername] = useState(""); 
 
 useEffect(() => {

  if (username === "") return; 

  console.log("Username Changed:", username);
  }, [username]); 

  return(
    <div style={{padding: "2rm"}}>

      <h1>Github Explorer</h1>

      <input
      type="text"
      placeholder="Enter Github username"
      value={username}
      onChange={(e) => setUsername(e.target.value)} />

    </div>

  );

}

export default App; 
