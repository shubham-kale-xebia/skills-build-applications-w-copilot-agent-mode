import { useEffect, useState } from 'react';
import { getApiBaseUrl, getCollectionData } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await getCollectionData('/api/activities/');
        setActivities(data);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      }
    };

    loadActivities();
  }, []);

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-1">Activities</h2>
            <p className="text-muted mb-0">Recent workouts and daily movement logs.</p>
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
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Notes</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity._id || activity.id}>
                    <td>{activity.type}</td>
                    <td>{activity.duration} min</td>
                    <td>{activity.notes || '—'}</td>
                    <td>{activity.userId?.name || 'Unknown'}</td>
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

export default Activities;
