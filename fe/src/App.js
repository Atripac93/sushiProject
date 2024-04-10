import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Content from "./components/homePage/Content";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route path="/home" element={<Content />} />

          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
