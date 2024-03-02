import * as NotesController from "../controllers/notesController";
import express from "express";

const router = express.Router();

router.get('/', NotesController.getNotes);



export default router;