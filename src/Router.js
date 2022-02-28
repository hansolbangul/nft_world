import World from './routes/World.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import { Header } from './component/Header.js';
import Location from './routes/Location'

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/world/:local" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
