import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Home from '../pages/Home';
import BoastPage from '../pages/Boast';
import Join from '../pages/Join';
import PostWrite from '../pages/PostWrite';
import UserPage from '../pages/UserPage';
import DetailPage from '../pages/DetailPage';
import QnaPage from '../pages/Qna';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/boast" element={<BoastPage />} />
        <Route path="/Qna" element={<QnaPage />} />
        <Route path="/postWrite" element={<PostWrite />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/detailPage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
