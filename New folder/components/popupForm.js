import ContactForm from './PopUpSignIn';
import React from 'react';

const Popup = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='popup-form col-md-12'>{props.children}</div>
      </div>
    </div>
  ) : (
    ''
  );
};
export default Popup;
