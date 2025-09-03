export interface InsuranceProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  startingPrice: number;
}

export interface QuoteRequest {
  productType: string;
  age?: number;
  coverage?: number;
  term?: number;
  vehicleType?: string;
  propertyValue?: number;
}

export interface ClaimStatus {
  id: string;
  status: 'submitted' | 'under-review' | 'approved' | 'settled' | 'rejected';
  amount: number;
  submittedDate: string;
  lastUpdated: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}