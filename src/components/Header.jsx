import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header>
        <nav className='bg-gray-800 py-4'>
          <div className='container mx-auto px-4 flex justify-between items-center'>
            <div>
              <Link to='/' className='text-white font-semibold text-lg'>
                Home
              </Link>
            </div>
            <ul className='flex items-center'>
              <li>
                <Link
                  to='/host'
                  className='text-white font-semibold text-lg ml-4'
                >
                  Host
                </Link>
              </li>
              <li>
                <Link to='/' className='text-white font-semibold text-lg ml-4'>
                  Info
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-white font-semibold text-lg ml-4'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/destination'
                  className='text-white font-semibold text-lg ml-4'
                >
                  Destination
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
