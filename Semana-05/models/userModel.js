import mongoose, { Collection } from "mongoose";

const Collection = "users";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const userModel = mongoose.model(Collection, userSchema);
