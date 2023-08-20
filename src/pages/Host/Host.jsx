import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Host = () => {
  return (
    <div>
      <nav className='bg-gray-800 text-white py-4'>
        <div className='container max-auto px-4 font-semibold '>
          <ul className='flex justify-start'>
            <li className='ml-5'>
              <Link to='/host/dashboard'>Dashboard</Link>
            </li>
            <li className='ml-3'>
              <Link to='/host/income'>Income</Link>
            </li>
            <li className='ml-3'>
              <Link to='/host/reviews'>Reviews</Link>
            </li>
            <li className='ml-3'>
              <Link to='/destination'>Destination</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Host;
