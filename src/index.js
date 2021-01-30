//import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';

//create component

const App = function () {
  const buttonText = 'Click Me'
  return <div style={{ backgroundColor: "blue" }}><button>{buttonText}
  </button>
  </div>
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

//take react component and show it