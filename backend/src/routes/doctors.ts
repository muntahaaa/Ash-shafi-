import { Router } from 'express';
import { isValidObjectId } from 'mongoose';
import { connectToDatabase } from '../lib/mongodb';
import { DoctorModel } from '../models/doctor';
import type { Doctor } from '../types/doctor';

export const doctorsRouter = Router();

type DoctorPayload = Partial<Doctor>;

function normalizeDoctorPayload(payload: DoctorPayload) {
  return {
    name: payload.name?.trim() ?? '',
    description: payload.description?.trim() ?? '',
    time: payload.time?.trim() ?? '',
  };
}

function serializeDoctor(doctor: {
  _id: { toString(): string };
  name: string;
  description: string;
  time?: string;
  createdAt: Date;
  updatedAt: Date;
}) {
  return {
    id: doctor._id.toString(),
    name: doctor.name,
    description: doctor.description,
    time: doctor.time ?? '',
    createdAt: doctor.createdAt.toISOString(),
    updatedAt: doctor.updatedAt.toISOString(),
  };
}

function isInvalidId(id: string) {
  return !isValidObjectId(id);
}

doctorsRouter.get('/', async (_request, response) => {
  try {
    await connectToDatabase();

    const doctors = await DoctorModel.find({}).sort({ createdAt: -1 }).lean();

    response.json({ data: doctors.map(serializeDoctor) });
  } catch (error) {
    console.error('GET /doctors error', error);
    response.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

doctorsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  if (isInvalidId(id)) {
    response.status(400).json({ error: 'Invalid doctor id' });
    return;
  }

  try {
    await connectToDatabase();

    const doctor = await DoctorModel.findById(id).lean();

    if (!doctor) {
      response.status(404).json({ error: 'Doctor not found' });
      return;
    }

    response.json({ data: serializeDoctor(doctor) });
  } catch (error) {
    console.error('GET /doctors/:id error', error);
    response.status(500).json({ error: 'Failed to fetch doctor' });
  }
});

doctorsRouter.post('/', async (request, response) => {
  try {
    await connectToDatabase();

    const doctor = normalizeDoctorPayload(request.body as DoctorPayload);

    if (!doctor.name || !doctor.description) {
      response.status(400).json({ error: 'name and description are required' });
      return;
    }

    const created = await DoctorModel.create(doctor);

    response.status(201).json({ data: serializeDoctor(created.toObject()) });
  } catch (error) {
    console.error('POST /doctors error', error);
    response.status(500).json({ error: 'Failed to create doctor' });
  }
});

doctorsRouter.patch('/:id', async (request, response) => {
  const { id } = request.params;

  if (isInvalidId(id)) {
    response.status(400).json({ error: 'Invalid doctor id' });
    return;
  }

  try {
    await connectToDatabase();

    const payload = normalizeDoctorPayload(request.body as DoctorPayload);
    const updated = await DoctorModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    if (!updated) {
      response.status(404).json({ error: 'Doctor not found' });
      return;
    }

    response.json({ data: serializeDoctor(updated) });
  } catch (error) {
    console.error('PATCH /doctors/:id error', error);
    response.status(500).json({ error: 'Failed to update doctor' });
  }
});

doctorsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;

  if (isInvalidId(id)) {
    response.status(400).json({ error: 'Invalid doctor id' });
    return;
  }

  try {
    await connectToDatabase();

    const payload = normalizeDoctorPayload(request.body as DoctorPayload);
    const updated = await DoctorModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    if (!updated) {
      response.status(404).json({ error: 'Doctor not found' });
      return;
    }

    response.json({ data: serializeDoctor(updated) });
  } catch (error) {
    console.error('PUT /doctors/:id error', error);
    response.status(500).json({ error: 'Failed to update doctor' });
  }
});

doctorsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  if (isInvalidId(id)) {
    response.status(400).json({ error: 'Invalid doctor id' });
    return;
  }

  try {
    await connectToDatabase();

    const deleted = await DoctorModel.findByIdAndDelete(id).lean();

    if (!deleted) {
      response.status(404).json({ error: 'Doctor not found' });
      return;
    }

    response.json({ data: serializeDoctor(deleted) });
  } catch (error) {
    console.error('DELETE /doctors/:id error', error);
    response.status(500).json({ error: 'Failed to delete doctor' });
  }
});
