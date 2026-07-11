import express from 'express'
import  cors from 'cors'
import morgan from  'morgan'

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(morgan('dev'));

app.get("/", (req,res)=>{
    res.send("Hello World to backend.");
})
export default app
