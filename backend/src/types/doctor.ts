export interface Doctor {
  name: string;
  description: string;
  time?: string;
}

export interface DoctorResponse extends Doctor {
  id: string;
  createdAt: string;
  updatedAt: string;
}
