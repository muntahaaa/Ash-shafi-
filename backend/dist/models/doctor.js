"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModel = void 0;
const mongoose_1 = require("mongoose");
const doctorSchema = new mongoose_1.Schema({
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
    specialty: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
}, {
    timestamps: true,
});
exports.DoctorModel = mongoose_1.models.Doctor || (0, mongoose_1.model)('Doctor', doctorSchema);
