import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import Linkpage from "./pages/Linkpage";
import Unauthorized from "./pages/Unauthorized";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Lounge from "./pages/Lounge";
import NotFound from "./pages/NotFound";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150,
}

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
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="/editor" element={<Editor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="/lounge" element={<Lounge />} />
        </Route>

        {/* all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
