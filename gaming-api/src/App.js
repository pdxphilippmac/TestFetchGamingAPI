import React from "react";
import igdb from "igdb-api-node";

import "./App.css";
const client = igdb("e2715f17601c1d968b592f747c6aa839");

const response = await apicalypse(rawQueryString, {
  queryMethod: "url"
}).request("https://myapi.com/actors/nm0000216");

console.log(response.data);

function App() {
  return <div className="App">test</div>;
}

export default App;
