import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    description: { type: String, required: true, unique: true }
}, { timestamps: true });

export const Book = model("Book", bookSchema);
