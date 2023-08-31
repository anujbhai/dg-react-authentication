import { Routes, Route } from 'react-router-dom'

import Layout from './layout';
import Login from './components/Login'
import Register from './components/Register'
import Linkpage from './pages/Linkpage'
import Unauthorized from './pages/Unauthorized'
import Home from './pages/Home'
import Editor from './pages/Editor';
import Admin from './pages/Admin';
import Lounge from './pages/Lounge';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<Linkpage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/lounge" element={<Lounge />} />

        {/* all */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App;
