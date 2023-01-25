const mongoose = require('mongoose');
const uuid = require('node-uuid')

const carSchema = new mongoose.Schema({
    _id: { type: String, default: uuid.v1 },
    name: {type: String},
    model: {type: String},
    color: {type: String},
    year: {type: Number}
})

exports.module = mongoose.model("Car", carSchema)