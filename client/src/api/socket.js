// socket.js
import { io } from 'socket.io-client';

// Note the VITE_ prefix here!
const VITE_SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

export const socket = io(VITE_SOCKET_URL, {
    autoConnect: true,
});