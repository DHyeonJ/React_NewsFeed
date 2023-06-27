import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Boast from '../pages/Boast';
import Qna from '../pages/Qna';
import Join from '../pages/Join';
import PostWrite from '../pages/PostWrite';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boast" element={<Boast />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/postWrite" element={<PostWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
