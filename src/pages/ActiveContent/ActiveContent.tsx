import React, { useState } from 'react';
import { FaArrowLeft, FaReact } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ActiveContent.css';
const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
  [
    'Vanilla JavaScript requires imperative programming',
    'Imperative Programming: You define all the steps needed to achieve a result',
    'React on the other hand embraces declarative programming',
    'With React, you define the goal and React figures out how to get there',
  ],
];

const ActiveContent = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='container'>
      <button onClick={goBack} className='btn text-secondary'>
        <FaArrowLeft />
        Geh zurück
      </button>
      <header>
        <FaReact size={50} color='black' className='' />
        <div>
          <h1 className='text-secondary'>React.js</h1>
          <p className='text-secondary'>
            Verwenden der React-Bibliothek zum Rendern der Benutzeroberfläche
          </p>
        </div>
      </header>

      <div id='tabs'>
        <menu>
          <button
            className={activeContentIndex === 0 ? 'active' : ''}
            onClick={() => setActiveContentIndex(0)}
          >
            Warum React?
          </button>
          <button
            className={activeContentIndex === 1 ? 'active' : ''}
            onClick={() => setActiveContentIndex(1)}
          >
            Kernfunktionen
          </button>
          <button
            className={activeContentIndex === 2 ? 'active' : ''}
            onClick={() => setActiveContentIndex(2)}
          >
            Ähnliche Resourcen
          </button>
          <button
            className={activeContentIndex === 3 ? 'active' : ''}
            onClick={() => setActiveContentIndex(3)}
          >
            Programmieransatz
          </button>
        </menu>
        <div id='tab-content'>
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveContent;
