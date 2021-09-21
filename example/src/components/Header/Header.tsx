import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

function Header({ links = [] }: { links?: any[] }): JSX.Element {
  return (
    <>
      <div className='Header'>
        <div className='section' style={{ flex: '1 0 100%', maxWidth: '100%' }}>
          <img className='logo' src={logo} alt='logo' />
          <span className='title'>Examples of "react-modal-hook"</span>
        </div>

        <div
          className='section'
          style={{
            flex: '1 1 100%',
            maxWidth: '100%',
            justifyContent: 'flex-end'
          }}
        >
        </div>
      </div>
      <div style={{ height: '80px' }}></div>
    </>
  );
}
export default Header;
