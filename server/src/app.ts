import "dotenv/config"
import express, {Request, Response, NextFunction} from "express";
// import NoteModel from "./models/note";
import notesRoutes from "./routes/notes"

const app = express();


// app.get('/',async (req,res)=>{
//     try {
//         // res.send('Hello Tesa')
//         const notes = await NoteModel.find().exec();
//         res.status(200).json(notes);
//     } catch (error) {
//         console.log(error);
//     }

// });


app.use((req,res,next)=>{
    next(Error("Endpoint not found"));
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    const errorMessage = "An unknown error occured";
    const statusCode = 200;
    res.status(statusCode).json({ error: errorMessage });
});

export default app;