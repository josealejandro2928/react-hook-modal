/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Modal, useModal } from 'react-hook-modal';
import 'react-hook-modal/dist/index.css';
import ReactMarkdown from 'react-markdown';
import Button from '../components/Button/Button';
import FileTree from '../components/FileTree/FileTree';
import Header from '../components/Header/Header';
import ToDoForm from '../components/TodoForm/TodoForm';

import './App.scss';

const App = () => {
  const { setComponentToRender, closeModal } = useModal();

  function onOpenBasicModal() {
    const footer = (
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          style={{ backgroundColor: '#aaa' }}
          onClick={() => closeModal()}
        >
          Cerrar
        </Button>
        <Button
          style={{ marginLeft: '8px' }}
          onClick={() => closeModal('Close succefully')}
        >
          Guardar
        </Button>
      </div>
    );

    const component = (
      <div>
        <h3> Lorem ipsum dolor sit amet consectet</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          excepturi, ipsum recusandae voluptatum odio at optio atque non libero
          eaque blanditiis, eius doloremque consequatur aliquam. Rem, autem
          ipsa? Iusto, ab.
        </p>
        <h3>Develop across all platforms</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          excepturi, ipsum recusandae voluptatum odio at optio atque non libero
          eaque blanditiis, eius doloremque consequatur aliquam. Rem, autem
          ipsa? Iusto, ab.
        </p>
        <p>
          Learn one way to build applications with Angular and reuse your code
          and abilities to build apps for any deployment target. For web, mobile
          web, native mobile and native desktop.
        </p>

        <h3>Speed &amp; Performance</h3>
        <p>
          Achieve the maximum speed possible on the Web Platform today, and take
          it further, via Web Workers and server-side rendering. Angular puts
          you in control over scalability. Meet huge data requirements by
          building data models on RxJS, Immutable.js or another push-model.
        </p>

        <h3>Incredible tooling</h3>
        <p>
          Build features quickly with simple, declarative templates. Extend the
          template language with your own components and use a wide array of
          existing components. Get immediate Angular-specific help and feedback
          with nearly every IDE and editor. All this comes together so you can
          focus on building amazing apps rather than trying to make the code
          work.
        </p>

        <h3>Loved by millions</h3>
        <p>
          From prototype through global deployment, Angular delivers the
          productivity and scalable infrastructure that supports Google's
          largest applications.
        </p>
      </div>
    );

    setComponentToRender(component, {
      title: 'Lorem ipsum dolor sit amet,',
      width: '20cm',
      closeOnBackgroundOrEsc: true,
      animation: true,
      footer: footer
    });
  }

  function onOpenFileTreeModal() {
    setComponentToRender(<FileTree />, {
      title: 'File tree component',
      width: '40rem',
      closeOnBackgroundOrEsc: false
    });
  }
  function onOpenYoutubeModal() {
    setComponentToRender(
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '80vh',
          maxHeight: '100%'
        }}
      >
        <iframe
          style={{
            width: 1280,
            height: 720,
            maxWidth: '100%',
            maxHeight: '100%'
          }}
          src='https://www.youtube.com/embed/Tn6-PIqc4UM?list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>,
      {
        title: 'React explined in 100 seconds',
        fullScreen: true
      }
    );
  }

  function onOpenForm() {
    setComponentToRender(<ToDoForm />, {
      title: 'Create a new to-do',
      width: '50rem',
      closeOnBackgroundOrEsc: false,
      animation: true,
      darkMode: true
    });
  }

  return (
    <div className='App'>
      <Header />
      <div className='grid container'>
        <Section
          title='Simple basic use'
          description='Dialog with header, scrollable content and actions, and animation to open'
        >
          <Button onClick={onOpenBasicModal}>Click me</Button>
          <div className='markDownSection'>
            <ReactMarkdown>
              {`
           ...
           const { setComponentToRender, closeModal } = useModal();
           ...

          setComponentToRender(component, {
            title: 'Lorem ipsum dolor sit amet,',
            width: '20cm',
            closeOnBackgroundOrEsc: false,
            animation: true,
            footer: footer
          });

          // *component and footer: are a customs JSX
          `}
            </ReactMarkdown>
          </div>
        </Section>

        <Section
          title='Use with render a basic full state component'
          description='Dialog that renders a Custom component, with the option not to close out of context and non animation '
        >
          <Button onClick={onOpenFileTreeModal}>Click me</Button>
          <div className='markDownSection'>
            <ReactMarkdown>
              {`
           ...
           const { setComponentToRender, closeModal } = useModal();
           ...

           setComponentToRender(<FileTree />, {
            title: 'File tree component',
            width: '40rem',
            closeOnBackgroundOrEsc: false
          });
          `}
            </ReactMarkdown>
          </div>
        </Section>

        <Section
          title='Use with full screen option'
          description='Dialog that renders a youtube iframe whith fullscreen option'
        >
          <Button onClick={onOpenYoutubeModal}>Click me</Button>
          <div className='markDownSection'>
            <ReactMarkdown>
              {`
           ...
           const { setComponentToRender, closeModal } = useModal();
           ...

           setComponentToRender(
            <div style={{ display: 'grid', placeItems: 'center', height: '80vh', maxHeight: '100%'}}>
              <iframe style={{ width: 1280, height: 720, maxWidth: '100%', maxHeight: '100%'}}
                src='https://www.youtube.com/embed/Tn6-PIqc4UM?list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>,
            {
              title: 'React explined in 100 seconds',
              fullScreen: true
            }
          );
          `}
            </ReactMarkdown>
          </div>
        </Section>
        <Section
          title='Use with a form component to create a new to-do'
          description='Dialog that renders a basic form to create a new to-do, in this example we set the darkMode option'
        >
          <Button onClick={onOpenForm}>Click me</Button>
          <div className='markDownSection'>
            <ReactMarkdown>
              {`
           ...
           const { setComponentToRender, closeModal } = useModal();
           ...

           setComponentToRender(<ToDoForm />, {
            title: 'Create a new to-do',
            width: '50rem',
            closeOnBackgroundOrEsc: false,
            animation: true,
            darkMode: true
          });

          `}
            </ReactMarkdown>
          </div>
        </Section>
      </div>

      {/* Modal section here */}
      <Modal />
    </div>
  );
};

export default App;

function Section({
  children,
  title = '',
  description = ''
}: {
  children: any;
  title?: string;
  description?: string;
}) {
  return (
    <section className='Section'>
      <h2>{title}</h2>
      {description && <p className='description'>{description}</p>}
      {children}
    </section>
  );
}
