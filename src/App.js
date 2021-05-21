import './App.css';
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


function App() {
  const [arr, setarr] = useState([]);
  const [newitem, setnewitem] = useState("");
  const itemEvents=(event)=>
  {
    setnewitem(event.target.value);
  }
  const additem=(event)=>
  {
    
    event.preventDefault();
    setarr((olditem)=>
    {
      return [...arr,newitem];
    })
    setnewitem("");
   

  }
  const deleteitem=()=>
  {
    console.log("clicked");
  }
 
  return (
    <>
    <div className="main" style={{
      marginTop:30,
      marginLeft:420,
      border:"1px solid red",
      width:500,
      backgroundColor:"skyblue",
      height:570
    }}>
      <div className="center">
        <h1 style={{
          backgroundColor:"tomato",
          textAlign:"center",
        }}>Todo List</h1><br/>
        <input type="text" placeholder="Add a item" style={{
          width:350,height:100,borderBottom:"2px solid purple",marginLeft:15,
          
        }}
        onChange={itemEvents} value={newitem}/>
        {/* <button style={{
          width:60,marginLeft:10,backgroundColor:"lawngreen",height:60,borderRadius:50
        }} >+</button> */}
       <Button variant="contained" size="large" color="primary" style={{
          marginLeft:20, width:100,height:100,borderRadius:100}} onClick={additem}>
       <AddIcon/>
      </Button>
       
      </div>
      <br/>
        <ul style={{
          fontFamily:"cursive",
          fontSize:22,listStyleType:"none"
        }}>
          {
            arr.map((value,index)=>
            {
              return <><li>
              {/* <i className="fa fa-times" aria-hidden="true" 
              /> */}
              <DeleteIcon onClick={deleteitem} style={{ 
                marginRight:5,height:50,width:50
              }}/>
              {value}</li></>;
            })
          }
        </ul>
    </div>
    </>
  );
}

export default App;
