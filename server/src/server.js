import express from 'express'
import http, { Server } from 'http'
import 'dotenv/config'
import  cors from 'cors'

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(morgan('dev'));

app.get("/", (req,res)=>{
    res.send("Hello World to backend.");
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`The backend is running on: http://localhost:${port}`)
})