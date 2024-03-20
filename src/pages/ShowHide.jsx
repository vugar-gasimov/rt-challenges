import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShowHide = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className='container'>
      <button onClick={goBack} className='btn'>
        <FaArrowLeft />
        Go Back
      </button>
      <button onClick={() => setShow((show) => !show)} className='btn'>
        {' '}
        {show ? 'Hide' : 'Show'}
      </button>
      {show ? (
        <h1>Good luck in learning and in improving your react skills</h1>
      ) : null}
    </main>
  );
};

export default ShowHide;
