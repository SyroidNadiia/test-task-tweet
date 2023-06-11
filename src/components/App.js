import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';


const HomePage = lazy(() => import('../pages/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
