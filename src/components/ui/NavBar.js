import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar({ isAuthenticated, logout }) {
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      logout();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">ReactAuth</Link>

        <div className="navbar-links">
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
