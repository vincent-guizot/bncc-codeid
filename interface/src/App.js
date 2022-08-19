import React from "react";
import "./App.css";

import Profile from "./components/Profile";

// React Component
function App() {
  const profiles = [
    {
      id: 1,
      name: "Vincent",
      hobby: "makan",
    },
    {
      id: 2,
      name: "Denny",
      hobby: "climbing",
    },
    {
      id: 3,
      name: "Donny",
      hobby: "motoran",
    },
    {
      id: 4,
      name: "tests",
      hobby: "coding",
    },
    {
      id: 5,
      name: "Putri",
      hobby: "jalan2",
    },
  ];

  // JSX => Syntactical Sugar utk HTML tp sebenarnya adalah bahasa JS
  return (
    <div className="App">
      <h1>Belajar React.js</h1>
      <hr />

      {
        profiles.map(profile => {
          const {id, name, hobby} = profile
          return (
            <Profile key={id} name={name} hobby={hobby}></Profile>
          )
        })
      }
    </div>
  );
}

export default App;
