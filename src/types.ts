export type PageId = 'home' | 'about' | 'services' | 'accredations' | 'instrumentation' | 'clientele' | 'contact';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Instrument {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  description: string;
  category: string;
  capacity: string;
  image: string;
  specifications: string[];
  utility: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyType: string;
  quote: string;
  serviceUsed: string;
  verified: boolean;
}

export interface MockCOA {
  sampleId: string;
  sampleName: string;
  batchNumber: string;
  manufacturer: string;
  dateReceived: string;
  dateCompleted: string;
  analyst: string;
  status: 'Passed' | 'Failed' | 'In Progress';
  tests: {
    parameter: string;
    method: string;
    specification: string;
    result: string;
    status: 'Conforms' | 'Non-Conforms' | 'Pending';
  }[];
  purityScore: number;
  impuritiesFound: string;
  conclusion: string;
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  urgency: 'Standard' | 'Rush' | 'Critical';
  sampleCount: number;
  additionalNotes: string;
}
