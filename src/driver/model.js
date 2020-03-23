import mongoose from "mongoose"

const driverSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Mark: String
});

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;