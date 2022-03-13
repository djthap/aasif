import React from 'react';

const SearchBar = () => {
  return (
    <>
      <input
        className='form-control'
        type='text'
        placeholder='Search'
        aria-label='Search'
      />
      <style jsx>
        {`
          .form-control {
            border: none;
            padding: 0 25px;
            height: 42px;
            left: 540px;
            background: #f2f2f2;
            border-radius: 21px;
          }
        `}
      </style>
    </>
  );
};

export default SearchBar;
