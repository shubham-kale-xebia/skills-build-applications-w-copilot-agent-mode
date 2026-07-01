import { useEffect, useState } from 'react';
import { getApiBaseUrl, getCollectionData } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await getCollectionData('/api/workouts/');
        setWorkouts(data);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-1">Workouts</h2>
            <p className="text-muted mb-0">Suggested training plans for members.</p>
          </div>
          <span className="badge bg-primary">API {getApiBaseUrl()}</span>
        </div>
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <div className="row g-3">
            {workouts.map((workout) => (
              <div className="col-md-6" key={workout._id || workout.id}>
                <div className="border rounded p-3 h-100">
                  <h3 className="h5">{workout.title}</h3>
                  <p className="mb-2">Duration: {workout.duration} mins</p>
                  <p className="mb-2">Difficulty: {workout.difficulty}</p>
                  <p className="text-muted mb-0">Assigned to: {workout.userId?.name || 'Unknown'}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Workouts;
