import React, { useState } from 'react';

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {entry.children ? (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer sm:w-32 md:w-40 lg:w-48 xl:w-56'
        >
          {isExpanded ? '-' : '+'} {entry.name}
        </button>
      ) : (
        <div className='bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-900 text-white font-bold py-2 px-4 rounded sm:w-32 md:w-40 lg:w-48 xl:w-56'>
          {entry.name}
        </div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Entry;
