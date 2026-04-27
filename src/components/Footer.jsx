import { Link } from "react-router-dom";
import "../css/Footer.css"
function Footer() {
  return (
    <div className="footer">
    <div className="footer-container">
      <div className="footer-1">
        <h3>Note:</h3>
        <p>
          "This product uses the TMDB API but it is not endorsed or certified by
          TMDB."
        </p>
        <p>
          "The Movie Database (TMDB) is a community built movie and TV database.
          Every piece of data has been added by TMDB amazing community dating
          back to 2008. TMDB's strong international focus and breadth of data is
          largely unmatched and something they're incredibly proud of. Put simply,
          TMDB live and breathe community and that's precisely what makes them
          different."
        </p>
      </div>
      <div className="footer-2">
        <h3>Site Map</h3>
        <Link to="/" className="footer-links">Home</Link>
        <Link to="/" className="footer-links">Movie App</Link>
        <Link to="/" className="footer-links">About</Link>
        <Link to="/favorites" className="footer-links">Favorites</Link>
      </div>
    </div>
    <div className="copy-right">
        <p>Copyright @ 2026, Movie App, All Rights Reserved</p>
    </div>
    </div>
  );
}

export default Footer;