import mongoose from "mongoose";

const roundSchema = new mongoose.Schema({
    word: {type: String, required: true},
    drawerId: {type: String, required:  true},
    correctGuessers: [{type: String}],
    startTime: {type: Date},
    endTime: { type: Date}
}, { _id:false});

const gameSchema = new mongoose.Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, ref:'Room', requried: true},
    rounds: [roundSchema],
    startedAt: {type: Date, default: Date.now},
    endedAt: {type: Date}
});

const Game = mongoose.model('Game', gameSchema);
export default Game;