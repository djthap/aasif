import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';
const Header = () => {
  return (
    <>
      <div className=' header'>
        <div className='row'>
          <div className='col-md-4 headcontainer'>
            <h1>Logo</h1>
          </div>
          <div className='col-md-4 headcontainer'>
            <div className='container'>
              <SearchBar />
            </div>
          </div>
          <div className='col-md-4 headcontainer'>
            <span className='account-create'>Create Account. </span>
            <span>
              <Link href='#'>It's free</Link>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          background: #ffffff;
          box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
        }
        .row {
          width: 100%;
        }
        .headcontainer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .account-create {
          height: 21px;
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 21px;
          text-align: right;
          color: #2e2e2e;
        }
      `}</style>
    </>
  );
};

export default Header;
