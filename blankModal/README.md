# @devgw-react/blank-modal

React Hook to open your modal on browser

## Installation

#### yarn

`yarn add @devgw-react/blank-modal`

#### npm

`npm i @devgw-react/blank-modal`

## Usage

```js
import React from "react";
import { ModalTemplate, useModalHandler } from "../lib";

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
| modalVisibleHandler | ()=>void  | modal isVisible handler        | no       |
