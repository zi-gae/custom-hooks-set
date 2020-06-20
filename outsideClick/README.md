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
import { ModalTemplate, useModalHandler } from "@devgw/blank-modal";

const ModalParent = () => {
  const {
    isVisible,
    handleModalActive,
    handleModalInactive,
  } = useModalHandler();
  return (
    <>
      <ModalTemplate
        isVisible={isVisible} // modal status
        handleModalInactive={handleModalInactive} // modal close
      >
        // create a component for modal here.
        <div>HELLOW</div>
        <button onClick={handleModalInactive}></button> // modal close
      </ModalTemplate>
      <button onClick={handleModalActive}>MODAL OPEN</button> // modal open
    </>
  );
};

export default ModalParent;
```

### ModalTemplate Arguments

| Argument            | Type      | Description                    | Required |
| ------------------- | --------- | ------------------------------ | -------- |
| children            | ReactNode | Components to be view in modal | yes      |
| isVisible           | boolean   | modal visible state value      | yes      |
| handleModalInactive | ()=>void  | modal isVisible handler        | no       |
| borderRadius        | string    | modal border radius value      | no       |
| bgColor             | string    | modal background color value   | no       |
