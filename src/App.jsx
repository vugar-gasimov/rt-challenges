import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout';
import ShowHide from './pages/ShowHide';
import Home from './pages/Home';

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
      </Route>
    </Routes>
  );
}

export default App;
