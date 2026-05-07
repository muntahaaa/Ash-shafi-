"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorsRouter = void 0;
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const mongodb_1 = require("../lib/mongodb");
const doctor_1 = require("../models/doctor");
exports.doctorsRouter = (0, express_1.Router)();
function normalizeDoctorPayload(payload) {
    return {
        name: payload.name?.trim() ?? '',
        description: payload.description?.trim() ?? '',
        time: payload.time?.trim() ?? '',
        specialty: payload.specialty?.trim() ?? '',
    };
}
function serializeDoctor(doctor) {
    return {
        id: doctor._id.toString(),
        name: doctor.name,
        description: doctor.description,
        time: doctor.time ?? '',
        specialty: doctor.specialty,
        createdAt: doctor.createdAt.toISOString(),
        updatedAt: doctor.updatedAt.toISOString(),
    };
}
function isInvalidId(id) {
    return !(0, mongoose_1.isValidObjectId)(id);
}
exports.doctorsRouter.get('/', async (request, response) => {
    try {
        await (0, mongodb_1.connectToDatabase)();
        const specialty = typeof request.query.specialty === 'string' ? request.query.specialty.trim() : '';
        const query = specialty ? { specialty } : {};
        const doctors = await doctor_1.DoctorModel.find(query).sort({ createdAt: -1 }).lean();
        response.json({ data: doctors.map(serializeDoctor) });
    }
    catch (error) {
        console.error('GET /doctors error', error);
        response.status(500).json({ error: 'Failed to fetch doctors' });
    }
});
exports.doctorsRouter.get('/:id', async (request, response) => {
    const { id } = request.params;
    if (isInvalidId(id)) {
        response.status(400).json({ error: 'Invalid doctor id' });
        return;
    }
    try {
        await (0, mongodb_1.connectToDatabase)();
        const doctor = await doctor_1.DoctorModel.findById(id).lean();
        if (!doctor) {
            response.status(404).json({ error: 'Doctor not found' });
            return;
        }
        response.json({ data: serializeDoctor(doctor) });
    }
    catch (error) {
        console.error('GET /doctors/:id error', error);
        response.status(500).json({ error: 'Failed to fetch doctor' });
    }
});
exports.doctorsRouter.post('/', async (request, response) => {
    try {
        await (0, mongodb_1.connectToDatabase)();
        const doctor = normalizeDoctorPayload(request.body);
        if (!doctor.name || !doctor.description || !doctor.specialty) {
            response.status(400).json({ error: 'name, description, and specialty are required' });
            return;
        }
        const created = await doctor_1.DoctorModel.create(doctor);
        response.status(201).json({ data: serializeDoctor(created.toObject()) });
    }
    catch (error) {
        console.error('POST /doctors error', error);
        response.status(500).json({ error: 'Failed to create doctor' });
    }
});
exports.doctorsRouter.patch('/:id', async (request, response) => {
    const { id } = request.params;
    if (isInvalidId(id)) {
        response.status(400).json({ error: 'Invalid doctor id' });
        return;
    }
    try {
        await (0, mongodb_1.connectToDatabase)();
        const payload = normalizeDoctorPayload(request.body);
        const updated = await doctor_1.DoctorModel.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        if (!updated) {
            response.status(404).json({ error: 'Doctor not found' });
            return;
        }
        response.json({ data: serializeDoctor(updated) });
    }
    catch (error) {
        console.error('PATCH /doctors/:id error', error);
        response.status(500).json({ error: 'Failed to update doctor' });
    }
});
exports.doctorsRouter.put('/:id', async (request, response) => {
    const { id } = request.params;
    if (isInvalidId(id)) {
        response.status(400).json({ error: 'Invalid doctor id' });
        return;
    }
    try {
        await (0, mongodb_1.connectToDatabase)();
        const payload = normalizeDoctorPayload(request.body);
        const updated = await doctor_1.DoctorModel.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        if (!updated) {
            response.status(404).json({ error: 'Doctor not found' });
            return;
        }
        response.json({ data: serializeDoctor(updated) });
    }
    catch (error) {
        console.error('PUT /doctors/:id error', error);
        response.status(500).json({ error: 'Failed to update doctor' });
    }
});
exports.doctorsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params;
    if (isInvalidId(id)) {
        response.status(400).json({ error: 'Invalid doctor id' });
        return;
    }
    try {
        await (0, mongodb_1.connectToDatabase)();
        const deleted = await doctor_1.DoctorModel.findByIdAndDelete(id).lean();
        if (!deleted) {
            response.status(404).json({ error: 'Doctor not found' });
            return;
        }
        response.json({ data: serializeDoctor(deleted) });
    }
    catch (error) {
        console.error('DELETE /doctors/:id error', error);
        response.status(500).json({ error: 'Failed to delete doctor' });
    }
});
