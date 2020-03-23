import mongoose from 'mongoose';
import Driver from "../driver/model.js";

const daiSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    driver: [{
        type: mongoose.Types.ObjectId,
        model: Driver,
        ref:"Driver"
    }]


});

const Dai = mongoose.model("Dai", daiSchema);

export default Dai;