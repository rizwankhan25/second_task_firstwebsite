import React from "react";
import Header from "./Header";
import "./App.css";
import Body from "./Body";
function App(){
  return(
    <div>
      <div id="header">
        <Header />
      </div>
        <Body/>
    </div>  
  )
}
export default App;