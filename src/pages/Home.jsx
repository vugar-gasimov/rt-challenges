import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to the home page!</h1>
      <h2>These are links to other challenge pages:</h2>
      <ul>
        <li>
          <Link to='/showhide' className='btn'>
            ShowHide
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
