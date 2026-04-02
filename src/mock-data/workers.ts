import { MOCK_SERVICES } from './services';

export const MOCK_WORKERS = [
  {
    id: 'w_101',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    avatar: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=150&auto=format&fit=crop&q=80',
    isAvailable: true,
    skills: [MOCK_SERVICES[0], MOCK_SERVICES[4]], // Plumber, Carpenter
    pricing: { baseRate: 350, rateType: 'hourly' },
    distanceKm: 1.2,
    rating: { average: 4.8, count: 124 },
    about: 'Experienced plumber with 10 years of experience. Quick and reliable.',
  },
  {
    id: 'w_102',
    firstName: 'Sunil',
    lastName: 'Verma',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    isAvailable: true,
    skills: [MOCK_SERVICES[1]], // Electrician
    pricing: { baseRate: 200, rateType: 'fixed' },
    distanceKm: 2.5,
    rating: { average: 4.5, count: 89 },
    about: 'Expert electrician for household faults and new installations.',
  },
  {
    id: 'w_103',
    firstName: 'Amit',
    lastName: 'Sharma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    isAvailable: false,
    skills: [MOCK_SERVICES[2]], // AC Servicing
    pricing: { baseRate: 500, rateType: 'fixed' },
    distanceKm: 4.0,
    rating: { average: 4.9, count: 210 },
    about: 'Specialist in split and window AC repair and gas refills.',
  },
  {
    id: 'w_104',
    firstName: 'Deepa',
    lastName: 'Nair',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    isAvailable: true,
    skills: [MOCK_SERVICES[3]], // Cleaning
    pricing: { baseRate: 600, rateType: 'fixed' },
    distanceKm: 0.8,
    rating: { average: 4.7, count: 340 },
    about: 'Professional house cleaning team lead. Dusting, mopping, and deep cleaning.',
  },
];
