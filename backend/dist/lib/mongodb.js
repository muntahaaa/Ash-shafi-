"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const mongodbUrl = process.env.MONGODB_URL;
if (!mongodbUrl) {
    throw new Error('Please define the MONGODB_URL environment variable');
}
const MONGODB_URL = mongodbUrl;
const cached = global.mongooseCache ?? { conn: null, promise: null };
if (!global.mongooseCache) {
    global.mongooseCache = cached;
}
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose_1.default.connect(MONGODB_URL, {
            dbName: process.env.MONGODB_DB,
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
