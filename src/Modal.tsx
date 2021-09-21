/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useContext } from 'react';
import { ModalDataContext, ModalState } from './Modal.context';
import classes from './styles.scss';

export interface ModalProps {
  classContainer?: any;
  styles?: {
    container?: React.CSSProperties;
    header?: React.CSSProperties;
    body?: React.CSSProperties;
    footer?: React.CSSProperties;
  };
}

export function Modal({
  classContainer,
  styles = {
    container: {
      width: '40rem'
    },
    header: {},
    body: {},
    footer: {}
  }
}: ModalProps): JSX.Element {
  const modalRef = useRef<any>();
  const { modalState, closeModal } = useModal();

  let styleContainer: React.CSSProperties = { ...styles?.container };

  if (modalState.width) {
    styleContainer.width = modalState.width;
  }

  if (modalState.height) {
    styleContainer.minHeight = modalState.height;
  }

  if (modalState.resizable) {
    styleContainer.width = 'auto';
    styleContainer.resize = 'both';
  } else {
    styleContainer.resize = 'unset';
  }

  if (modalState.fullScreen) {
    styleContainer.width = '100vw';
    styleContainer.height = '100vh';
    styleContainer.maxHeight = '100vh';
    styleContainer.maxWidth = '100vw';
    styles.body = { ...styles.body };
    styles.body.maxHeight = '100vh';
  }

  if (!modalState.animation) {
    styleContainer.animation = 'unset';
  }
  if (modalState.darkMode) {
    styleContainer.backgroundColor = '#323232';
    styleContainer.color = '#fff';
    styles.header = {
      ...styles.header,
      backgroundColor: '#1e1e1e',
      color: '#fff'
    };
  }
  let classToContainerModal = classes['modal-container'];

  if (classContainer) {
    classToContainerModal = classContainer;
    styleContainer = {};
  }

  function onClickBackground() {
    if (modalState.closeOnBackgroundOrEsc) {
      closeModal();
    }
  }
  function detectKey(e: any) {
    if (e.key === 'Escape') {
      onClickBackground();
    }
  }

  useEffect(() => {
    if (modalState.show) {
      document.addEventListener('keydown', detectKey);
    } else {
      document.removeEventListener('keydown', detectKey);
    }
    return () => {
      document.removeEventListener('keydown', detectKey);
    };
  }, [modalState.show]);

  return (
    <div id='modal-full-component' ref={modalRef} className={classes['Modal']}>
      {modalState.show && (
        <div>
          <div
            onClick={onClickBackground}
            className={classes['backdrop']}
          ></div>
          <div className={classToContainerModal} style={styleContainer}>
            <div className={classes['header']} style={styles?.header}>
              <div
                style={{ maxWidth: '92%' }}
                className={classes['elipsis-text']}
              >
                {modalState.title}
              </div>

              <div className={classes['close-btn']}>
                <button onClick={() => closeModal()}>
                  <svg
                    style={{ fill: styles?.header?.color || 'inherit' }}
                    x='0px'
                    y='0px'
                    width='16px'
                    height='16px'
                    viewBox='0 0 357 357'
                  >
                    <g>
                      <g id='clear'>
                        <polygon
                          points='357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
214.2,178.5 		'
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className={classes['body']} style={styles?.body}>
              {modalState.component}
            </div>
            {modalState.footer && (
              <div>
                <div style={{ height: '64px' }}></div>
                <div className={classes['footer']} style={styles?.footer}>
                  {modalState.footer}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export interface ModalOptions {
  title?: string;
  dataProps?: any;
  width?: string | number;
  height?: string | number;
  closeOnBackgroundOrEsc?: boolean | undefined;
  resizable?: boolean;
  fullScreen?: boolean;
  animation?: boolean;
  footer?: JSX.Element | null | undefined;
  darkMode?: boolean;
}
const initialModalState: ModalState = {
  show: false,
  component: null,
  title: '',
  dataProps: null,
  height: null,
  width: null,
  closeOnBackgroundOrEsc: false,
  footer: null,
  resizable: false,
  fullScreen: false,
  animation: false,
  darkMode: false
};

export const useModal = (closeCb?: Function) => {
  const { modalState, setModalState } = useContext(ModalDataContext);
  const initRef = useRef(true);

  useEffect(() => {
    if (initRef.current) {
      initRef.current = false;
      return;
    }
    if (modalState.show === false && closeCb) {
      closeCb(modalState.dataProps);
    }
  }, [modalState.show]);

  function setComponentToRender(element: JSX.Element, options?: ModalOptions) {
    setModalState({
      ...modalState,
      show: true,
      component: element,
      ...options
    });
  }

  const closeModal = (data?: any) => {
    setModalState({
      ...modalState,
      ...initialModalState,
      dataProps: data
    });
  };

  const setOptions = (options?: ModalOptions) => {
    setModalState({
      ...modalState,
      ...options
    });
  };

  const setFooter = (footer: JSX.Element | null) => {
    setModalState({
      ...modalState,
      footer
    });
  };

  return {
    dataToProps: modalState.dataProps,
    modalState,
    setComponentToRender,
    closeModal,
    setOptions,
    setFooter
  };
};
