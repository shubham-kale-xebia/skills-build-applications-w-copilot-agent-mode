const getCodespaceName = () => import.meta.env.VITE_CODESPACE_NAME?.trim();

export const getApiBaseUrl = () => {
  const codespaceName = getCodespaceName();
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
};

const normalizeCollection = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === 'object' && Array.isArray(payload.results)) {
    return payload.results;
  }

  if (payload && typeof payload === 'object' && Array.isArray(payload.items)) {
    return payload.items;
  }

  if (payload && typeof payload === 'object' && Array.isArray(payload.data)) {
    return payload.data;
  }

  return [];
};

export const getCollectionData = async (path) => {
  const response = await fetch(`${getApiBaseUrl()}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return normalizeCollection(payload);
};
