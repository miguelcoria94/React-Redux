//import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';

//create component

const App = function () {
  return <div style={{backgroundColor: "blue"}}>Hi There!</div>
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

//take react component and show it