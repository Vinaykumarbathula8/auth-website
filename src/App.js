import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import './App.css';
import Navbar from './components/ui/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import PasswordSetup from './pages/PasswordSetup';
import NewTask from './pages/NewTask';
import AddUser from './pages/AddUser';
import GenerateReport from './pages/GenerateReport';
import Settings from './pages/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status when app loads
  useEffect(() => {
    const checkAuthStatus = () => {
      // Check for auth token in localStorage
      const token = localStorage.getItem('authToken');
      
      if (token) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = () => {
    // In a real app, this would validate credentials and store the token
    localStorage.setItem('authToken', 'user-auth-token');
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove token on logout
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} logout={logout} />
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login login={login} />} 
          />
          <Route 
            path="/signup" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup login={login} />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
            path="/password-setup" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <PasswordSetup login={login} />} 
          />
          <Route 
            path="/new-task" 
            element={isAuthenticated ? <NewTask /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/add-user" 
            element={isAuthenticated ? <AddUser /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/generate-report" 
            element={isAuthenticated ? <GenerateReport /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/settings" 
            element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;