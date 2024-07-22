import './assets/stylesheets/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RootRoutes from './routes/RootRoutes';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<RootRoutes />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;
