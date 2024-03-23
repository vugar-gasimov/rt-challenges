import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout';
import ShowHide from './pages/ShowHide';
import Home from './pages/Home';
import StopWatch from './pages/StopWatch';
import ProgressBar from './pages/ProgressBar';
import BrowserTree from './pages/BrowserTree';
import GuessTheColor from './pages/GuessTheColor';
import ActiveContent from './pages/ActiveContent/ActiveContent';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={'Loading...'}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route path='/showhide' element={<ShowHide />} />
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='/progressbar' element={<ProgressBar />} />
        <Route path='/browsertree' element={<BrowserTree />} />
        <Route path='/guessthecolor' element={<GuessTheColor />} />
        <Route path='/activecontent' element={<ActiveContent />} />
      </Route>
    </Routes>
  );
}

export default App;
