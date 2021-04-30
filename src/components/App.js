import React from "react";
import Nav from "./Nav";

import HogList from "./HogList";


function App() {
  console.hog("hello")
  return (
    <div className="App">
      <Nav />
      <HogList />
    </div>
  );
}

export default App;
