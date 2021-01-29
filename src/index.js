import React from 'react';
import ReactDOM from 'react-dom';

const useConfirm = (message = "", callback ) =>{
  if(typeof callback !=="fucntion"){
    console.log("invalid type");
    return;
  }

  const confirmAction = () =>{
    console.log("prepare confirm");
    if( window.confirm(message)){

      console.log("confirm");
      callback() ;
    }else{
      console.log("else");
    }

  }
  return confirmAction;
}

const App = () => {

  const deleteWorld = () => console.log("Delete the world");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);

  return (
    <div className="App">
      <button onClick = {confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);