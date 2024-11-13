
import { Router } from "express";
import {
    addBook,deleteBook,getAllBook,getBookById,updateBook
} from "../controllers/book.controller.js";
const router = Router();
router.route("/createBook").post(addBook)
router.route("/:id").delete( deleteBook)
router.route("/:id").get( getBookById)
router.route("/").get( getAllBook)
router.route("/:id").put(updateBook)

export default router