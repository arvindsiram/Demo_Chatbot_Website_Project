import { QuoteRequest } from '../types';

export const calculateQuote = (request: QuoteRequest): number => {
  let basePrice = 0;
  
  switch (request.productType) {
    case 'health':
      basePrice = 3500;
      if (request.age && request.age > 45) basePrice *= 1.5;
      if (request.coverage && request.coverage > 500000) basePrice *= 1.3;
      break;
    
    case 'life':
      basePrice = 500;
      if (request.age && request.age > 40) basePrice *= 2;
      if (request.coverage && request.coverage > 5000000) basePrice *= 1.8;
      if (request.term && request.term > 20) basePrice *= 1.2;
      break;
    
    case 'auto':
      basePrice = 2500;
      if (request.vehicleType === 'luxury') basePrice *= 2;
      if (request.vehicleType === 'commercial') basePrice *= 1.5;
      break;
    
    case 'home':
      basePrice = 1500;
      if (request.propertyValue && request.propertyValue > 2000000) basePrice *= 1.8;
      break;
    
    default:
      basePrice = 1000;
  }
  
  return Math.round(basePrice);
};

export const getClaimStatus = (claimId: string) => {
  // Mock claim status lookup
  const mockStatuses = [
    {
      id: 'CLM001',
      status: 'approved' as const,
      amount: 45000,
      submittedDate: '2024-01-15',
      lastUpdated: '2024-01-20'
    },
    {
      id: 'CLM002', 
      status: 'under-review' as const,
      amount: 125000,
      submittedDate: '2024-01-22',
      lastUpdated: '2024-01-25'
    }
  ];
  
  return mockStatuses.find(claim => claim.id === claimId);
};