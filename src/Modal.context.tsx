/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

export interface ModalState {
  show: boolean;
  component: JSX.Element | null;
  footer: JSX.Element | null;
  title: string | null | undefined;
  dataProps: any;
  width?: string | number | undefined | null;
  height?: string | number | undefined | null;
  closeOnBackgroundOrEsc?: boolean;
  resizable?: boolean;
  fullScreen?: boolean;
  animation?: boolean;
  darkMode?: boolean;
}

const initialState: ModalState = {
  show: false,
  component: null,
  footer: null,
  title: '',
  dataProps: null,
  width: null,
  height: null,
  closeOnBackgroundOrEsc: true,
  resizable: false,
  fullScreen: false,
  animation: false,
  darkMode: false
};

export const ModalDataContext = createContext({
  modalState: initialState,
  setModalState: (_state: ModalState) => {}
});

export const ModalDataContextProvider = ({ children }: { children: any }) => {
  const [modalState, setModalState] = useState<ModalState>(initialState);

  return (
    <ModalDataContext.Provider
      value={{ modalState, setModalState: setModalState as any }}
    >
      {children}
    </ModalDataContext.Provider>
  );
};
