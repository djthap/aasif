import React from 'react';
import {
  FaAngleDown,
  FaUsers,
  FaShareAlt,
  FaRegEye,
  FaPencilAlt,
  FaRegWindowClose,
} from 'react-icons/fa';

const Body = () => {
  return (
    <div className=' container '>
      <div className='container pt-5'>
        <div className='container pl-5 pr-5'>
          <div className='row'>
            <div className='col-md-8 pl-0'>
              <ul>
                <li>All Posts(32)</li>
                <li className='text-muted'> Article</li>
                <li className='text-muted'> Event</li>
                <li className='text-muted'>Education</li>
                <li className='text-muted'>Job</li>
              </ul>
            </div>
            <div className='col-md-4 flex'>
              <button className='btn btn-dark'>
                Write a Post <FaAngleDown />
              </button>
              <button className='btn btn-primary '>
                <FaUsers className='mr-3' />
                Join Group
              </button>
            </div>
            <style jsx>
              {`
                .row {
                  letter-spacing: 0px;
                  border-bottom: 1px solid #e5e5e5;
                }
                ul {
                  padding-left: 0px;
                  display: flex;
                  justify-content: start;
                  align-items: center;
                }
                li {
                  padding: 0px 8px;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 21px;
                  color: #000000;
                }
                .btn-dark {
                  margin-right: 10px;
                  margin-bottom: 10px;
                  background: #edeef0;
                  border: none;
                  color: #000000;
                  font-weight: 600;
                  font-size: 16px;
                  font-family: 'IBM Plex Sans';
                }
                .btn-primary {
                  margin-bottom: 10px;
                  border: none;
                  font-weight: 500;
                  font-size: 15px;
                }
                .flex {
                  padding-right: 0px;
                  display: flex;
                  justify-content: end;
                  align-items: center;
                }
                .fa {
                  margin-right: 10px;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
