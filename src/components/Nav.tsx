import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav= () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Candidate Search</Link></li>
        <li><Link to="/SavedCandidates">Saved Candidates</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;