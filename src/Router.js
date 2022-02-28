import China from './routes/China.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="china" element={<China />} />
          {/* <Route path="price" element={<Price />} /> */}
        </Route>
        {/* <Route path="china" element={<China />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
