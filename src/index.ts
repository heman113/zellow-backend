import express, {Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from "./routes/MyUserRoute";

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Database connected");
})

app.use(express.json());
app.use(cors());

app.get("/health",async (req: Request,res: Response)=>{
    res.send({message: "Health OK!"});
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
    console.log("Server running on port 7000");
})