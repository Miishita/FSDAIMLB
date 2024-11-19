import React from 'react'
import Student from './Student';
import logo from './assets/me.jpeg';

function App() {
  let a=20;
  let mystyle={
    backgroundColor:'cyan',color:'black',border:'10px solid red',height:'100px',
  }
  return (
    <div>
      <Student 
       pic={<img src={logo} height={100} width={100}/>}
      college="ABES" name="Rahul kumar" branch="CSE-AIML" roll="22345648" />
    </div>
     
  )
}

export default App

