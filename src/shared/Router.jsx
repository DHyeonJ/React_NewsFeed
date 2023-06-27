import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from '../pages/Join';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" />
        <Route path="/" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
