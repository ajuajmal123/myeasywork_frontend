/**
 * Native Fetch wrapper to replace Axios
 * Automatically includes credentials for CORS
 */

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  // Use the env variable if present, else fallback
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
  const url = `${baseUrl}${endpoint}`;

  const defaultOptions: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // equivalent to axios withCredentials: true
  };

  const response = await fetch(url, defaultOptions);
  let data;

  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || 'API request failed');
  }

  return data;
}
