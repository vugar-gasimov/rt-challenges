import { useState } from 'react';

const StopWatch = () => {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 10);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(window.myTimer);
  };

  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(time % 1000);
    return (
      <div>
        <span>{minutes} minutes</span>
        <span>{seconds} seconds</span>
        <span>{milliseconds} milliseconds</span>
      </div>
    );
  };

  return (
    <main className='container'>
      <h1>Timer</h1>
      {formatTime(timer)}
      <div>
        <button onClick={startTimer} className='btn'>
          Start
        </button>
        <button onClick={stopTimer} className='btn'>
          Stop
        </button>
        <button onClick={resetTimer} className='btn'>
          Reset
        </button>
      </div>
    </main>
  );
};

export default StopWatch;
