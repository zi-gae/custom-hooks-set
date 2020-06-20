[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://img.shields.io/github/license/devGW/custom-hooks-sets)
[![npm version](https://badge.fury.io/js/%40devgw-react%2Fblank-modal.svg)](https://badge.fury.io/js/%40devgw-react%2Fblank-modal)

![GitHub issues](https://img.shields.io/github/issues/devGW/custom-hooks-sets)
![GitHub closed issues](https://img.shields.io/github/issues-closed/devGW/custom-hooks-sets?color=critical)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/devGW/custom-hooks-sets?color=success)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/devGW/custom-hooks-sets?color=critical)

# ui-custom-hooks

React Hook to open your modal on browser

React Hook to outside click for dropdown and tooltip

## Installation

#### yarn

`yarn add ui-custom-hooks`

#### npm

`npm i ui-custom-hooks`

## Modal Usage

```js
import React from "react";
import { ModalTemplate, useModalHandler } from "ui-custom-hooks/blankModal";

const ModalParent = () => {
  const { isVisible, toggleModalStatus } = useModalHandler();
  return (
    <>
      <ModalTemplate
        isVisible={isVisible}
        toggleModalStatus={toggleModalStatus}
      >
        <div>HELLOW</div>
        <button onClick={toggleModalStatus}>Close</button>
      </ModalTemplate>
      <button onClick={toggleModalStatus}>Open</button>
    </>
  );
};

export default ModalParent;
```

### Arguments

| Argument            | Type      | Description                    | Required |
| ------------------- | --------- | ------------------------------ | -------- |
| children            | ReactNode | Components to be view in modal | yes      |
| isVisible           | boolean   | modal visible state value      | yes      |
| handleModalInactive | ()=>void  | modal isVisible handler        | no       |
| handleModalActive   | ()=>void  | modal isVisible handler        | no       |
| borderRadius        | string    | modal border radius value      | no       |
| bgColor             | string    | modal background color value   | no       |

---

## outsideClick(Tooltop, Dropdown...) Usage

```js
import React from "react";
import { render } from "react-dom";
import { ref, isComponentVisible } from "ui-custom-hooks/outsideClick";

const OutsideAlerter = (props) => {
  const wrapperRef = useRef(null);
  if(isComponentVisible) {
    alert("outside Click!!!")
  }

  return <div ref={wrapperRef}>{props.children}</div>;
}

const App = () => {
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
