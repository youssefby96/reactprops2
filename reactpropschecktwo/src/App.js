import React from "react";
import Profile from "./profile/profile/component";
import imagedev from "./imagedev.jpg";
import ActionLink from "./profile/ActionLink";
import "./App.css";

function App() {
  const handleNamee = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <h1 style={{ color: "#161491", height: 100, weight: 100 }}>
        Checkpoint React Props
      </h1>

      <Profile name="Youssef Ben Youssef" bio="My name is Youssef Ben Youssef , I am 24 years old and I staddy in GO MY CODE." job="Developer" />
      <ActionLink handleNamee={handleNamee} name="Youssef Ben Youssef" />
      <br></br><br></br>
      <img src={imagedev} alt="alternative" />
       
      
    </div>
  );
}

export default App;