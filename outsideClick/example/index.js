import React from "react";
import { render } from "react-dom";
import { ref, isComponentVisible } from "@devgw-react/outside-click";

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  if(isComponentVisible) {
    alert("outside Click!!!")
  } 

  return <div ref={wrapperRef}>{props.children}</div>;
}

function App() {
  <OutsideAlerter ref={ref}>
    <button>Click outside me!</button>
  </OutsideAlerter>
);

render(<App />, document.getElementById("root"));
