import React, { useState } from 'react';
import './App.css';


function App() {
  const styleObject={
    color: "teal",
    fontStyle: "italic",
    justify: "center",
  };

  let Person= {
    fullName: "Andrew Maleek",
    bio: "bio",
    profession: "profession",
  }

  let [isChecked , SetChecked]= useState(false);
  let [personState , setState]=useState("notvisibile")

  function handleChecked(){
    SetChecked(!isChecked);
   }
  
   let togglePersonDetails=isChecked?"active ":"notactive";
  return (
    <>
     <h1 style={styleObject} >Welcome to use state hooks</h1>
     <div onchange={() => setState("visible")} className={togglePersonDetails}>
       <p>{Person.fullName}</p>
       <p>{Person.bio}</p>
       <p>{Person.profession}</p>
     </div>
     <input type="checkbox"  checked={isChecked} onChange={handleChecked} ></input>
     <label>{isChecked? "Checked" : "NotChecked"}</label>

    </>
  );
}

export default App;
