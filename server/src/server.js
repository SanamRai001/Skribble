import http from 'http';
import { Server } from 'socket.io';
import 'dotenv/config'
import app  from './app.js'

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}});

const port = process.env.PORT || 5000
server.listen(port,()=>{
    console.log(`The backend is running on: http://localhost:${port}`)
})