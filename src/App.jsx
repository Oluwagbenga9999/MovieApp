import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import "./css/App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <MovieProvider>
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/favorites" element={<Favorite></Favorite>} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
    </MovieProvider>
  );
}

export default App;
