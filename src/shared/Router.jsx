import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import BoastPage from '../pages/Boast';
import Join from '../pages/Join';
import PostWrite from '../pages/PostWrite';
import DetailPage from '../pages/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/boast" element={<BoastPage />} />
        <Route path="/postWrite" element={<PostWrite />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
