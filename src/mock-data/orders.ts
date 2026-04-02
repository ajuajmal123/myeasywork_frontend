import { MOCK_WORKERS } from './workers';
import { MOCK_SERVICES } from './services';

export const MOCK_ORDERS = [
  {
    id: 'ord_5001',
    customerName: 'Vikram Singh',
    worker: MOCK_WORKERS[0],
    service: MOCK_SERVICES[0], // Plumbing
    status: 'ongoing',
    date: '2026-04-03T10:30:00Z',
    amount: 350,
    location: 'Indiranagar, Bangalore',
  },
  {
    id: 'ord_5002',
    customerName: 'Vikram Singh',
    worker: MOCK_WORKERS[1],
    service: MOCK_SERVICES[1], // Electrician
    status: 'completed',
    date: '2026-04-01T14:00:00Z',
    amount: 500,
    location: 'Indiranagar, Bangalore',
  },
  {
    id: 'ord_5003',
    customerName: 'Priya Patel', // If viewed by a worker, this is the customer
    worker: MOCK_WORKERS[0], // If Rajesh is viewing his jobs
    service: MOCK_SERVICES[4], // Carpentry
    status: 'pending',
    date: '2026-04-04T09:00:00Z',
    amount: 400,
    location: 'Koramangala, Bangalore',
  }
];
