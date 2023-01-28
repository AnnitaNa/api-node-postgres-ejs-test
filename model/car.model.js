const mongoose = require('mongoose');
const uuid = require('node-uuid')

const carSchema = new mongoose.Schema({
    _id: { type: String, default: uuid.v1 },
    name: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true},
    year: {type: String, required: true}
})

exports.module = mongoose.model("Car", carSchema)