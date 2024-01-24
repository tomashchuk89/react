import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          <span className="header">All Users</span>
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<User />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
