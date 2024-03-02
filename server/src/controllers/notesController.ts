import { RequestHandler } from "express";
import NoteModel from "../models/note";

export const  getNotes: RequestHandler = async (req,res, next)=>{
    try {
        // res.send('Hello Tesa')
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch (error) {
        next(error);
    }

};