import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Main/Home';
import Boast from '../components/Board/Boast/Boast';
import Qna from '../components/Board/QnA/Qna';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boast" element={<Boast />} />
        <Route path="/qna" element={<Qna />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
