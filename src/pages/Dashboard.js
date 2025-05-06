import { useState, useEffect } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  // Check authentication status when component mounts
  useEffect(() => {
    // Check if user is authenticated (e.g., by checking localStorage, sessionStorage, or a state management store)
    const checkAuth = () => {
      // Example: Check if token exists in localStorage
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      } else {
        // Only navigate to login if explicitly not authenticated
        // This prevents automatic redirects on page refresh
        // navigate('/login');
      }
    };
    
    checkAuth();
  }, []);

  // Add event listener to handle page refresh
  useEffect(() => {
    // Store authentication state before refresh
    const handleBeforeUnload = () => {
      if (isAuthenticated) {
        // Store a flag to indicate the page is being refreshed by an authenticated user
        sessionStorage.setItem('isRefreshing', 'true');
      }
    };

    // Check if this is a page reload with authenticated user
    const checkIfRefresh = () => {
      const isRefreshing = sessionStorage.getItem('isRefreshing');
      if (isRefreshing === 'true') {
        // Clear the flag
        sessionStorage.removeItem('isRefreshing');
        // User was authenticated before refresh, so maintain authenticated state
        setIsAuthenticated(true);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    checkIfRefresh();

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isAuthenticated]);
  
  const stats = [
    { title: 'Total Users', value: '2,543', change: '+12%', icon: '👥' },
    { title: 'Revenue', value: '$45,234', change: '+18%', icon: '💰' },
    { title: 'Projects', value: '143', change: '+5%', icon: '📊' },
    { title: 'Active Tasks', value: '32', change: '-2%', icon: '✓' },
  ];
  
  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'completed Task #45', time: '2 hours ago' },
    { id: 2, user: 'Sarah Smith', action: 'added a new comment', time: '3 hours ago' },
    { id: 3, user: 'Mike Jones', action: 'uploaded a document', time: '5 hours ago' },
    { id: 4, user: 'Emily Clark', action: 'created a new project', time: '1 day ago' },
    { id: 5, user: 'Alex Johnson', action: 'completed Task #32', time: '2 days ago' },
  ];

  const handleNewTaskClick = () => {
    navigate('/new-task');
  };

  const handleUserClick = () => {
    navigate('/add-user');
  };

  const handleReportClick = () => {
    navigate('/generate-report');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };


  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="dashboard-actions">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            <button className="new-project-button">
              + New Project
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-header">
                <div>
                  <p className="stat-title">{stat.title}</p>
                  <p className="stat-value">{stat.value}</p>
                </div>
                <span className="stat-icon">{stat.icon}</span>
              </div>
              <p className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="dashboard-tabs-container">
          <div className="tabs-header">
            <button
              onClick={() => setActiveTab('overview')}
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`tab ${activeTab === 'tasks' ? 'active' : ''}`}
            >
              Tasks
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`tab ${activeTab === 'reports' ? 'active' : ''}`}
            >
              Reports
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div>
                <h3 className="section-title">Recent Activity</h3>
                <ul className="activity-list">
                  {recentActivities.map((activity) => (
                    <li key={activity.id} className="activity-item">
                      <div className="activity-avatar">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="activity-details">
                        <p className="activity-text">{activity.user} {activity.action}</p>
                        <p className="activity-time">{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h3 className="section-title">Projects Content</h3>
                <p className="section-description">Your projects content will appear here.</p>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div>
                <h3 className="section-title">Tasks Content</h3>
                <p className="section-description">Your tasks content will appear here.</p>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="section-title">Reports Content</h3>
                <p className="section-description">Your reports content will appear here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="quick-actions-container">
          <h3 className="section-title">Quick Actions</h3>
          <div className="quick-actions-grid">
            <button className="action-button" onClick={handleNewTaskClick}>
              <span className="action-icon">📝</span>
              <span className="action-text">New Task</span>
            </button>
            <button className="action-button" onClick={handleUserClick}>
              <span className="action-icon">👥</span>
              <span className="action-text">Add User</span>
            </button>
            <button className="action-button" onClick={handleReportClick}>
              <span className="action-icon">📊</span>
              <span className="action-text">Generate Report</span>
            </button>
            <button className="action-button" onClick={handleSettingsClick}>
              <span className="action-icon">⚙️</span>
              <span className="action-text">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;