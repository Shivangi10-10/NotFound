const mongoose = require("mongoose")

const VolunteerSchema = new mongoose.Schema({
     name: {
        type:String,
        required: true,
        trim: true},
     email: {
        type:String, 
        required: true,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
     password: {
        type:String,
        required: true},
     phoneNumber: {
        type:String,
        required: true,
        trim: true},
     dayPreference: {
        type:[String],
        required: true},
    availability: {
        type:[String],
        required: true},
    jobPreferences: {
        type:[String],
        required: true}
})

const VolunteerModel = mongoose.model("volunteers", VolunteerSchema)
module.exports = VolunteerModel