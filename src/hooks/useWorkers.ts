import { useState, useEffect } from 'react';
import { fetchApi } from '../lib/api';

export function useWorkers(latitude: number, longitude: number, category?: string) {
  const [workers, setWorkers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWorkers() {
      try {
        setLoading(true);
        // Build the query normally
        let endpoint = `/customers/workers/search?lat=${latitude}&lng=${longitude}&radius=10`;
        if (category) endpoint += `&category=${encodeURIComponent(category)}`;

        // Using our native fetch api avoiding axios
        const response = await fetchApi(endpoint);
        setWorkers(response.data?.workers || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch workers');
      } finally {
        setLoading(false);
      }
    }

    if (latitude && longitude) {
      fetchWorkers();
    }
  }, [latitude, longitude, category]);

  return { workers, loading, error };
}
