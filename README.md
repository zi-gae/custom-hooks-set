[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://img.shields.io/github/license/devGW/custom-hooks-sets)
[![npm version](https://badge.fury.io/js/%40devgw-react%2Fblank-modal.svg)](https://badge.fury.io/js/%40devgw-react%2Fblank-modal)

![GitHub issues](https://img.shields.io/github/issues/devGW/custom-hooks-sets)
![GitHub closed issues](https://img.shields.io/github/issues-closed/devGW/custom-hooks-sets?color=critical)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/devGW/custom-hooks-sets?color=success)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/devGW/custom-hooks-sets?color=critical)

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
