# @devgw-react/blank-modal

React Hook to outside click for dropdown and tooltip ...

## Installation

#### yarn

`yarn add @devgw-react/outside-click`

#### npm

`npm i @devgw-react/outside-click`

## Usage

```js
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
```

### `useOutsideClickHandler` Arguments

| Argument              | Type                            | Description                    | Required |
| --------------------- | ------------------------------- | ------------------------------ | -------- |
| ref                   | `ref` of the standard component |                                | -        |
| isComponentVisible    | boolean                         | Components visible state value | -        |
| setIsComponentVisible | ()=>void                        | Components isVisible handler   | -        |
