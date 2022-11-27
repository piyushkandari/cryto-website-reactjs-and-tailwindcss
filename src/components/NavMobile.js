import React from 'react';

// import data
import { navData } from '../data';
// import icons
import { CgClose } from 'react-icons/cg';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-blue-800 h-full  font-semibold top-0 bottom-0 w-80 flex justify-center items-center'>
      {/* close btn */}
      <div
        onClick={() => setNavMobile(false)}
        className='absolute top-6 right-4 cursor-pointer'
      >
        <CgClose className='text-3xl font-semibold' />
      </div>
      {/* menu list */}
      <ul className='text-xl flex flex-col gap-y-8'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
