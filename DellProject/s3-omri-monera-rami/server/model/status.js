const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    name: String
})

const Status = mongoose.model("status", statusSchema);


exports.Status = Status;