import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown, FaArrowLeft } from 'react-icons/fa';

const getRandomColor = () => {
  const digits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  const color = new Array(6)
    .fill('')
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join('');
  return '#' + color;
};

enum Result {
  Correct,
  Wrong,
}

const GuessTheColor = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);

  const [result, setResult] = useState<Result | undefined>(undefined);

  const generateColors = () => {
    const currentColor = getRandomColor();
    setColor(currentColor);
    setAnswers(
      [currentColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(Result.Correct);
      generateColors();
    } else {
      setResult(Result.Wrong);
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className='container min-h-screen '>
      <button onClick={goBack} className='btn flex'>
        <FaArrowLeft />
        Geh zurück
      </button>
      <div className='flex justify-center items-center  flex-col'>
        <h1 className='font-bold text-secondary text-3xl flex'>
          Errate die richtige Farbe <FaArrowDown />
        </h1>
        {result === Result.Wrong && (
          <div className=' text-custom-red py-2 px-4 font-bold text-2xl'>
            Falsche Antwort
          </div>
        )}
        {result === Result.Correct && (
          <div className=' text-custom-green py-2 px-4 font-bold text-2xl'>
            Korrekte Antwort
          </div>
        )}
        <div className='flex justify-between '>
          <div
            className=' w-[600px] h-[400px] rounded-2xl '
            style={{ background: color }}
          ></div>
        </div>
        <div className='flex justify-between gap-[120px] p-3'>
          {answers.map((answer) => (
            <button
              onClick={() => handleAnswerClicked(answer)}
              className='bg-custom-lightblue hover:bg-custom-blue text-white font-bold py-2 px-4 rounded border border-custom-blue  focus:outline-none focus:border-custom-blue focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105'
              key={answer}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GuessTheColor;
