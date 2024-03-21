import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='container min-h-screen'>
      <h1>Welcome to the home page!</h1>
      <h2>These are links to other challenge pages:</h2>
      <ul>
        <li>
          <Link to='/showhide' className='btn'>
            Show Hide
          </Link>
          <Link to='/stopwatch' className='btn'>
            Stop Watch
          </Link>
          <Link to='/progressbar' className='btn'>
            Progress Bar
          </Link>
          <Link to='/browsertree' className='btn'>
            Browser Tree
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
