import { useState } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <main className='container'>
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
