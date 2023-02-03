import React, { useState } from "react";
import NewComponent from "./NewComponent";
import { LifeCycles } from "./LifeCycles";

function App() {
  // console.log("Re-render App js");
  let cnt = 0;
  const [counter, setCounter] = useState(0);
  const [ime, smeniIme] = useState("Samil");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const increment = () => {
    setCounter((pred) => pred + 1);
    smeniIme((pred) => {
      if (pred === "Samil") {
        return "Mirsat";
      } else {
        return "Samil";
      }
    });
  };
  const passDataToServer = () => {
    const userData = {
      name: userName,
      surname: userSurname,
    };
    console.log(userData);
  };
  // mozete da ja povikate funkcijata vo onChange
  // ili direkno da ja pishete vo callback funkcijata
  // shto ne e greshno
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <LifeCycles />
      <NewComponent
        ime={userName}
        prezime={userSurname}
        keMeniState={setCounter}
      />
      <h1>{counter}</h1>

      <input placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
      <input
        placeholder="Surname"
        onChange={(e) => setUserSurname(e.target.value)}
      />
      <button onClick={passDataToServer}>Send data</button>
      <button onClick={increment}>+</button>
      <button onClick={() => cnt++}>+++</button>
    </div>
  );
}

export default App;
