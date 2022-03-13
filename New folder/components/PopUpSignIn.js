import Link from 'next/link';
import React from 'react';
import { FaTimesCircle, FaFacebook, FaGoogle } from 'react-icons/fa';

const PopUpSignIn = (props, { authorEmail }) => {
  const contactForm = () => {
    return (
      <div className='popup-form'>
        <div className='col-md-6 bg-pop'>
          <form className='form-control'>
            <div className='col-md-12 '>
              <button
                className='btn btn-sm-danger'
                onClick={() => props.setTrigger(false)}>
                <FaTimesCircle />
              </button>
            </div>

            <div className='container'>
              <h1>Create Account</h1>
              <hr />

              <input
                type='text'
                placeholder='Enter First Name'
                name='firstname'
                id='name'
                required
              />

              <input
                type='text'
                placeholder='Enter Last Name'
                name='lastname'
                id='name'
                required
              />

              <input
                type='email'
                placeholder='Enter Email'
                name='email'
                id='email'
                required
              />

              <input
                type='password'
                placeholder='Enter Password'
                name='psw'
                id='psw'
                required
              />

              <input
                type='password'
                placeholder='Confirm Password'
                name='psw-repeat'
                id='psw-repeat'
                required
              />
              <hr />
              <button className='btn btn-primary'>Create account</button>
              <hr />
              <button className='btn btn-outline-primary mb-3'>
                <FaFacebook className='font' />
                Facebook
              </button>
              <button className='btn btn-outline-primary'>
                <FaGoogle className='font' />
                Google
              </button>
              <p>
                By signing up, you agree to our Terms & conditions,
                <a href='#'>Terms & Privacy</a>.
              </p>
            </div>
            <div class='container signin'>
              <p>
                Already have an account? <a href='#'>Sign in</a>.
              </p>
            </div>
          </form>
        </div>
        <style jsx>
          {`
            .popup-form {
              height: 100vh;
              width: 100%;
              display: flex;
              justify-content: center;
              position: absolute;
              top: 56px;
            }
            .bg-pop {
              border-radius: 10px;
              background: #ffff;
              top: 62px;
            }
            .container {
              padding: 16px;
              background-color: white;
            }

            input[type='email'],
            input[type='password'] {
              width: 100%;
              padding: 15px;
              display: inline-block;
              background: #f7f8fa;
              border: 1px solid #d9d9db;
              border-radius: 2px 2px 0px 0px;
            }
            input[type='text'] {
              width: 50%;
              padding: 15px;
              display: inline-block;
              background: #f7f8fa;
              border: 1px solid #d9d9db;
              border-radius: 2px 2px 0px 0px;
            }

            input[type='text']:focus,
            input[type='password']:focus {
              background-color: #ddd;
              outline: none;
            }

            hr {
              border: 1px solid #f1f1f1;
              margin-bottom: 25px;
            }

            a {
              color: dodgerblue;
            }

            .signin {
              background-color: #f1f1f1;
              text-align: center;
              display: flex;
              justify-content: center;
            }
            .btn-danger {
              border-radius: 50px;
            }
            .btn-primary {
              width: 100%;
              border-radius: 20px;
            }
            .btn-outline-primary {
              width: 100%;
              background: #ffffff;
              border: 0.6px solid #d9d9db;
              box-sizing: border-box;
              border-radius: 2px;
            }
            .container h1 {
              font-family: 'IBM Plex Sans';
              font-style: normal;
              font-weight: 700;
              font-size: 24px;
              line-height: 31px;
              color: #000000;
            }
            p {
              display: flex;
              justify-content: center;
              font-family: 'IBM Plex Sans';
              font-style: normal;
              font-weight: 400;
              font-size: 11px;
              line-height: 16px;
              text-align: right;
              letter-spacing: -0.008em;
              color: #000000;
              opacity: 0.6;
            }
            .font {
              margin-right: 10px;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className=''>
        {contactForm()}

        {/* {showSuccessMessage()} */}
        {/* {showErrorMessage()} */}
      </div>
    </React.Fragment>
  );
};

export default PopUpSignIn;
