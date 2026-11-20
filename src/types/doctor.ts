export interface Doctor {
  name: string;
  description: string;
  time?: string;
  /** Add a Cloudinary URL here when a doctor's portrait is available. */
  image?: string;
}

export interface DoctorDocument extends Doctor {
  id: string;
  createdAt: string;
  updatedAt: string;
}
