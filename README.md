# react-hook-modal

> A custom modal, with a custom hook for handling modals in React applications.
This package allows us to centralize the logic for rendering modal components. Through a hook, we can dynamically render any coponent in this modal.
This gives us flexibility in our components since we would not have to handle local states for modal rendering. For that we use the hook useModal

## Install

```bash
npm install --save react-hook-modal
```

## Usage

The "react-hook-modal" api consists of a hook: **useModal**, a component containing the modals: **Modal**,
and a HOC **ModalDataContextProvider**.
**react-hook-modal**, uses the react Context api to exchange states and information to be rendered in the modal through all the components of our application.

### 1. Declare the HOC **ModalDataContextProvider** to wrap the entire application

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
////////////////////////////////////
import { ModalDataContextProvider } from 'react-hook-modal';
////////////////////////////////////

ReactDOM.render(
  ////////////////////////////////////
  <ModalDataContextProvider>
    <App />
  </ModalDataContextProvider>,
  ////////////////////////////////////
  document.getElementById('root')
);
```

### 2. Put the **Modal** component in the container component, and add the styles e.g. App.

```tsx
 ...
 import 'react-hook-modal/dist/index.css';
 ...
 return (
    <div className='App'>
      <Header />
      {/* Modal section here */}
      <Modal />
    </div>
  );
```

### 3. Use the custom hook function **useModal** to access to the functions to interact to the modal:

1.  **setComponentToRender(element: JSX.Element, options?: ModalOptions)**
2.  **closeModal(data?: any)**
3.  **setOptions(options?: ModalOptions)**
4.  **const setFooter(footer: JSX.Element | null)**

#### Example:

```tsx
...
import { Modal, useModal } from 'react-hook-modal';
...
  const { setComponentToRender, closeModal } = useModal(onCloseModal);

  function onCloseModal(data){
      console.log("Modal closed",data);
  }
  return (
   <button
        style={{ color: '#fff' }}
        type="button"
        onClick={() => {
          setComponentToRender(<AccountCustomComponent />, {
            title: 'My Account',
            animation: true,
            closeOnBackgroundOrEsc: false,
          });
        }}
      >
        Open Modal
      </button>
  )
```

The **Modal** component has props to customize the styles of the container, header and body sections.
here an example of setting different styles:

```tsx
<Modal
  styles={{
    container: {
      backgroundColor: '#1C1C1C',
      color: '#fff',
      width: '55rem',
      maxHeight: '100vh',
      maxWidth: '100vw'
    },
    header: { backgroundColor: '#2C2C2C', color: '#fff' },
    body: { maxHeight: '80vh', padding: '0rem' }
  }}
/>
```

The **Modal** component has a prop called **classContainer** which defines a custom container Modal class
but it is recommended include the following css styles.

```css
.app-modal {
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  z-index: 999;
  top: 50%;
  left: 50%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  background-color: white;
  color: inherit;
  width: 50rem;
}
```

The **setComponentToRender(element: JSX.Element, options?: ModalOptions)** function takes a JSX.Element which can be a component or just an 'html' and renders it inside the body of the **Modal**.

**options** allow you to dynamically set the attributes and properties of the modal to be represented.

```ts
export interface ModalOptions {
  title?: string; // A title to display in the header
  dataProps?: any; // An object passed to the Modal state to share data: we can access **const {dataToProps} = useModal()
  width?: string | number; // Set the width for the modal
  height?: string | number; // Set the height for the modal
  closeOnBackgroundOrEsc?: boolean | undefined; // Closes the modal if we click outside the modal context or if we press the Esc key.
  resizable?: boolean; // Make a resizable Modal
  fullScreen?: boolean; // Complete viewport size
  animation?: boolean; // Make a nice animation on open the modal
  footer?: JSX.Element | null | undefined; // A component for the footer
  darkMode?: boolean; // Enable dark mode
}
```

![image-1](https://react-hook-modal.surge.sh/image-1.jpeg)
![image-2](https://react-hook-modal.surge.sh/image-2.jpeg)

## [Demo](https://react-hook-modal.surge.sh/)

## License

MIT © [josealejandro2928](https://github.com/josealejandro2928)
