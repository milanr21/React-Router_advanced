import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/id/${params.id}/info`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response is not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [params.id]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white rounded-lg shadow-md p-4 '>
        <img
          className='h-60 max-auto'
          src={data.download_url}
          alt={data.author}
        />
        <div className='text-center pt-3 pb-3'>
          <p>Image Id: {data.id}</p>
          <p className='pt-2 uppercase'>{data.author}</p>

          <button className='block mx-auto mt-4 bg-blue-500 hover:bg-blue-200 p-2 rounded-lg text-white font-bold '>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
