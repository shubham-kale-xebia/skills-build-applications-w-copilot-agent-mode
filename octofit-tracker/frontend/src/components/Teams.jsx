import { useEffect, useState } from 'react';
import { getApiBaseUrl, getCollectionData } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const data = await getCollectionData('/api/teams/');
        setTeams(data);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      }
    };

    loadTeams();
  }, []);

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-1">Teams</h2>
            <p className="text-muted mb-0">Collaborative squads and their members.</p>
          </div>
          <span className="badge bg-primary">API {getApiBaseUrl()}</span>
        </div>
        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <div className="row g-3">
            {teams.map((team) => (
              <div className="col-md-6" key={team._id || team.id}>
                <div className="border rounded p-3 h-100">
                  <h3 className="h5">{team.name}</h3>
                  <p className="text-muted">{team.description || 'No description provided.'}</p>
                  <p className="fw-semibold mb-2">Members: {team.members?.length || 0}</p>
                  <ul className="mb-0">
                    {(team.members || []).slice(0, 5).map((member) => (
                      <li key={member._id || member.id}>{member.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Teams;
