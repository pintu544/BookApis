import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../models/book.model.js";

// Add a new book
const addBook = asyncHandler(async (req, res) => {
  const { title, author, description } = req.body;
  if (!title || !author || !description) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }
  const book = new Book({ title, author, description });
  try {
    await book.save();
    res.status(201).json(new ApiResponse(201, book, "Book added successfully"));
  } catch (error) {
    throw new ApiError(400, error?.message || "Error adding book");
  }
});

// Get all books
const getAllBook = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find();
    res.json(new ApiResponse(200, books, "Books retrieved successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error getting books");
  }
});

// Get a book by ID
const getBookById = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Book not found"));
    }
    res.json(new ApiResponse(200, book, "Book retrieved successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error getting book by ID");
  }
});

// Update a book
const updateBook = asyncHandler(async (req, res) => {
  const { title, author, description } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description },
      { new: true, runValidators: true }
    );
    if (!book) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Book not found"));
    }
    res.json(new ApiResponse(200, book, "Book updated successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error updating book");
  }
});

// Delete a book
const deleteBook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Book not found"));
    }
    res.json(new ApiResponse(200, null, "Book deleted successfully"));
  } catch (error) {
    throw new ApiError(400, error?.message || "Error deleting book");
  }
});

export {
  addBook,
  deleteBook,
  getAllBook,
  getBookById,
  updateBook
};
