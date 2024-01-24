import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Post from "./pages/Post/Post";
import Todo from "./pages/Todo/Todo";
import User from "./pages/Users/User";

function App() {
  return (
    <div className="App">
      <nav className="nav-link">
        <NavLink to="/">
          <span className="header">Home</span>
        </NavLink>
        <NavLink to="/user">
          <span className="header">User</span>
        </NavLink>
        <NavLink to="/todo">
          <span className="header">Todo</span>
        </NavLink>
        <NavLink to="/post">
          <span className="header">Post</span>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Post />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
