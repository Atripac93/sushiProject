import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Content from "./components/homePage/Content";
import SushiDetails from "./pages/SushiDetails";
import Carrello from "./pages/Carrello";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route path="/home" element={<Content />} />
          <Route path="/sushi/:id" element={<SushiDetails />} />
          <Route path="/carrello" element={<Carrello />} />

          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
