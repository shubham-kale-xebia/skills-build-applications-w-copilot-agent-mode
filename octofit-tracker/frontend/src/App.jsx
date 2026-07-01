import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navigationItems = [
  { to: '/', label: 'Overview' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  return (
    <div className="app-shell container py-4">
      <header className="mb-4">
        <p className="text-uppercase text-muted fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold mb-3">Multi-tier fitness dashboard</h1>
        <p className="lead text-muted">
          This presentation tier talks to the Express API and uses Vite environment
          variables to resolve the correct Codespaces or localhost URL.
        </p>
        <div className="alert alert-info mt-3 mb-0" role="status">
          Define VITE_CODESPACE_NAME in .env.local to use URLs such as
          https://{your-codespace-name}-8000.app.github.dev/api/users/. When it is
          unset, the app falls back to http://localhost:8000.
        </div>
      </header>

      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : 'text-dark'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section className="row g-3">
                <div className="col-lg-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h2 className="h4">Welcome to OctoFit</h2>
                      <p className="text-muted">
                        Browse users, teams, activities, workouts, and the live
                        leaderboard from the backend.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h2 className="h4">Environment setup</h2>
                      <p className="text-muted">
                        Set VITE_CODESPACE_NAME in .env.local before starting the
                        frontend if you want the app to call a Codespaces-hosted
                        API instead of localhost.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
