import { useEffect, useState } from 'react';
import { getApiBaseUrl, getCollectionData } from '../utils/api';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');
  const endpoint = import.meta.env.VITE_CODESPACE_NAME
    ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
    : '/api/leaderboard/';

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await getCollectionData(endpoint);
        setEntries(data);
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard');
      }
    };

    loadLeaderboard();
  }, []);

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-1">Leaderboard</h2>
            <p className="text-muted mb-0">Top performing members by score.</p>
          </div>
          <span className="badge bg-primary">API {getApiBaseUrl()}</span>
        </div>
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry._id || entry.id}>
                    <td>{entry.rank || '—'}</td>
                    <td>{entry.userId?.name || 'Unknown'}</td>
                    <td>{entry.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Leaderboard;
