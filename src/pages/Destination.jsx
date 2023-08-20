import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Destination = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network reponse is not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className=' bg-orange-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
      {data.map((item) => (
        <div
          key={item.id}
          className='bg-white shadow-md rounded-md overflow-hidden '
        >
          <img
            className='object-cover w-full h-64 sm:h-48 md-h-56 lg:h-64'
            src={item.download_url}
            alt={item.author}
          />
          <div className='flex justify-between pt-3 pb-3 pl-3 pr-3'>
            <h2 className='font-semibold text-red-700'>{item.author}</h2>
            <p className='font-bold text-blue-800 '>{item.id}</p>
            <Link to={`/data/${item.id}`}>
              <button className='bg-red-400 p-1 rounded-md uppercase text-cyan-50'>
                Check
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destination;
