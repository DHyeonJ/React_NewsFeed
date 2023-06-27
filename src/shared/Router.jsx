import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Home from '../components/Main/Home';
import Boast from '../components/Board/Boast/Boast';
import Qna from '../components/Board/QnA/Qna';
import Join from '../pages/Join';
import PostWrite from '../pages/PostWrite';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boast" element={<Boast />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/postWrite" element={<PostWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
