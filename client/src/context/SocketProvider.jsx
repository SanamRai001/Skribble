import { useEffect } from "react";
import SocketContext from "./SocketContext";
import {socket} from  '../api/socket'
import { useState } from "react";

const SocketProvider = ({children}) => {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(()=>{
        socket.on("connect", ()=>{
            console.log('connected!socket id:', socket.id);
            setIsConnected(true);
        });
        return () =>{
            socket.off("connect");
        };
    },[]);
  return (
    <SocketContext.Provider value={{isConnected}}>
        {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider