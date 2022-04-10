import React from "react";
import Joke from "./components/Joke";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-light vh-100 vw-100">
      <Navbar />
      <Joke />
    </div>
  );
};

export default App;
