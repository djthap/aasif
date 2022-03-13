import React from 'react';

const Banner = () => {
  return (
    <div>
      <img
        src={
          'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        }
        style={{
          width: '100%',
          height: '440px',
        }}
        className='img   '
        alt='user profile'
      />

      <div className='container bannerheading'>
        <div className='row '>
          <div className='col-md-9'>
            {/* <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p> */}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .bannerheading {
            padding: 0px;
            position: absolute;
            top: 331px;
            color: white;
            letter-spacing: 1px;
          }
          .row {
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
