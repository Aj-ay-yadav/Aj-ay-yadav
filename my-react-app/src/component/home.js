import { useState } from 'react';

function User() {
 const[number,setnumber]=useState(0);

 function addnumber(){
  setnumber(number+1)
 }
 function removenumber(){
  if(number==0){
    alert("add more number")
  }
  else{
    setnumber(number-1)
  }
  
 }

    return (<>
     <h3>{number}</h3> <button onClick={addnumber}>add</button>
        <h1>To DO List in react</h1>
        <button onClick={removenumber}>remove</button>
    </>)
  }
  export default User;