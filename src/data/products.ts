import { InsuranceProduct } from '../types';

export const insuranceProducts: InsuranceProduct[] = [
  {
    id: 'health-individual',
    name: 'Individual Health Insurance',
    category: 'health',
    description: 'Comprehensive health coverage for individuals with cashless treatment.',
    features: [
      'Cashless treatment at 10,000+ hospitals',
      'Coverage up to ₹50 lakhs',
      'Pre and post hospitalization',
      'Day care procedures covered',
      'Annual health check-up'
    ],
    startingPrice: 3500
  },
  {
    id: 'health-family',
    name: 'Family Health Insurance',
    category: 'health',
    description: 'Protect your entire family with our comprehensive family health plan.',
    features: [
      'Coverage for entire family',
      'Individual sum insured for each member',
      'Maternity benefits',
      'Child vaccination coverage',
      'Emergency ambulance'
    ],
    startingPrice: 8500
  },
  {
    id: 'life-term',
    name: 'Term Life Insurance',
    category: 'life',
    description: 'Pure protection plan with high coverage at affordable premiums.',
    features: [
      'Coverage up to ₹10 crores',
      'Affordable premiums',
      'Tax benefits under 80C',
      'Flexible premium payment options',
      'Accidental death benefit'
    ],
    startingPrice: 500
  },
  {
    id: 'auto-car',
    name: 'Car Insurance',
    category: 'auto',
    description: 'Comprehensive car insurance with instant claim settlement.',
    features: [
      'Own damage coverage',
      'Third party liability',
      'Personal accident cover',
      'Roadside assistance',
      '24/7 claim support'
    ],
    startingPrice: 2500
  },
  {
    id: 'home-comprehensive',
    name: 'Home Insurance',
    category: 'home',
    description: 'Complete protection for your home and belongings.',
    features: [
      'Structure and contents coverage',
      'Natural disaster protection',
      'Theft and burglary cover',
      'Personal liability',
      'Temporary accommodation'
    ],
    startingPrice: 1500
  }
];