import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { files } from '../data/files';
import Entry from '../components/browserTreeEntry/Entry';

const BrowserTree = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className='container min-h-screen'>
      <button onClick={goBack} className='btn'>
        <FaArrowLeft />
        Go Back
      </button>
      {files.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </main>
  );
};

export default BrowserTree;
