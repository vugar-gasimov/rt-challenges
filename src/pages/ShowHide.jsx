import { useState } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='container'>
      <button onClick={() => setShow((show) => !show)}>
        {' '}
        {show ? 'Hide' : 'Show'}
      </button>
      {show ? (
        <h1>Good luck in learning and in improving your react skills</h1>
      ) : null}
    </div>
  );
};

export default ShowHide;
