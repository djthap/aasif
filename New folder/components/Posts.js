import React from 'react';
import {
  FaAngleDown,
  FaUsers,
  FaShareAlt,
  FaRegEye,
  FaPencilAlt,
  FaRegWindowClose,
  FaPeriscope,
} from 'react-icons/fa';

const Posts = () => {
  return (
    <div>
      <div className='container posts pt-3 '>
        <div className='row pt-3'>
          <div className='col-md-8'>
            <div className='post-container bor-der pb-3'>
              <img
                src={
                  'https://i.pinimg.com/736x/7a/7e/99/7a7e99b859e4e0c0b3fef9b0e48ca48c.jpg'
                }
                style={{
                  width: '100%',
                  height: '220px',
                }}
                className='img bor-der'
                alt='user profile'
              />
              <div className='content container pt-3'>
                <h3>
                  <FaPencilAlt />
                  Article
                </h3>
                <div className='row'>
                  <div className='col-md-10'>
                    <h2>
                      What if famous brands had regular fonts? Meet
                      RegulaBrands!
                    </h2>
                  </div>
                  <div className='col-md-2'>
                    <button className='btn btn-outline-dark'>...</button>
                  </div>
                </div>
                <p>
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className='row pt-5'>
                  <div className='col-md-6'>
                    <div className='row'>
                      <div className='col-md-4'>
                        {' '}
                        <img
                          src={
                            'https://upload.wikimedia.org/wikipedia/commons/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg'
                          }
                          style={{
                            width: '48px',
                            height: '48px',
                          }}
                          className='user-img'
                          alt='user profile'
                        />
                      </div>
                      <div className='col-md-6 username'>
                        <h2>Chirs Evan</h2>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 detail'>
                    <div className=' row text-center '>
                      <div className='col-md-8 upd'>
                        <p>
                          <FaRegEye /> 1.4K Views
                        </p>
                      </div>
                      <div className='col-md-3'>
                        <button className='btn btn-dark sharebtn'>
                          <FaShareAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 pt-3'>
            <div className='container add'>
              <div className='row bord'>
                <div className='col-md-9 flex'>
                  <p>
                    {' '}
                    <FaPeriscope /> Noida, India
                  </p>
                </div>
                <div className='col-md-3 loca'>
                  <FaPencilAlt />
                </div>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              .bor-der {
                background: #ffffff;
                border: 1px solid #e0e0e0;
                border-radius: 4px 4px 0px 0px;
              }
              .img {
                border-radius: 4px;
              }
              .user-img {
                border-radius: 100%;
              }
              .content h3 {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 23px;
                color: #000000;
              }
              .content h2 {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 22px;
                line-height: 134.17%;
                color: #000000;
              }
              .content p {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 19px;
                line-height: 134.17%;
                color: #5c5c5c;
              }
              .username {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 0;
              }
              .username h2 {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 23px;
                color: #000000;
              }
              .upd p {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                text-align: right;
                color: #525252;
                margin: auto;
              }
              .detail {
                display: flex;
                justify-content: end;
                align-items: center;
              }
              .sharebtn {
                background: #edeef0;
                border-radius: 2px;
                color: #000000;
                border: none;
              }
              .text-center {
                display: flex;
                align-items: baseline;
              }
              .flex {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .bord {
                border-bottom: 1px solid #e0e0e0;
              }
              .loca {
                display: flex;
                justify-content: end;
                align-items: center;
              }
              .add {
                width: 100%;
                padding-left: 113px;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Posts;
