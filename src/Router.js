import World from './routes/World.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="world" element={<World />} />
          {/* <Route path="price" element={<Price />} /> */}
        </Route>
        {/* <Route path="china" element={<China />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
