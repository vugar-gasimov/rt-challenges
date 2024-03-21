import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import ProgressPer from '../components/progressPercentage/ProgressPer';

const ProgressBar = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className='container min-h-screen'>
      {' '}
      <button onClick={goBack} className='btn'>
        <FaArrowLeft />
        Go Back
      </button>
      <ProgressPer width={val} />
      <form>
        <label htmlFor>Input Percentage:</label>
        <input
          className='rounded-lg border border-gray-300 p-2 w-20 md:w-28 outline-none'
          type='number'
          onChange={setValuer}
        />
      </form>
    </main>
  );
};

export default ProgressBar;
