import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    guestId: {type: String, required: true},
    name: {type: String, required: true},
    isHost: {type: Boolean, default: false}
}, {_id: false});

const roomSchehma = new  mongoose.Schema(
    {
        roomCode: {type: String, required: true, unique: true},
        hostId: {type: String, required: true},
        players:[playerSchema],
        status: {
            type: String,
            enum: ['waiting', 'in-progress', 'finished'],
            default: 'waiting'
        },
        settings: {
            maxPlayers: {type: Number, default: 8},
            roundDuration: { type: Number, default: 60},
            totalRounds: {type: Number, default: 3}
        }
    }, {timestamps: true}
);

const Room = mongoose.model("Room", roomSchehma);
export  default  Room;