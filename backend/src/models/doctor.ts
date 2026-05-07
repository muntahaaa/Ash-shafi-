import { Schema, model, models } from 'mongoose';
import type { Doctor } from '../types/doctor';

const doctorSchema = new Schema<Doctor>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String,
      trim: true,
      default: '',
    },
   
  },
  {
    timestamps: true,
  }
);

export const DoctorModel = models.Doctor || model<Doctor>('Doctor', doctorSchema);
