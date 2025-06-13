const mongoose = require('mongoose');
const validator = require('validator')

const jobschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, 'Job Title exceeds more than 100']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please enter the Job Description'],
        maxLength: [1000, 'Job Description should not exceed more than 1000 characters'],
        trim: true,
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter the email address']
    },
    company: {
        type: String,
        required: [true, 'Please Add the Company']
    },
    industry: {
        type: [String],
        required: true,
        enum: {
            value: [
                "Business",
                'Information Technology',
                'Banking',
                'Education/Technology',
                'Telecommunication',
                'Others'
            ],
            message: 'Please Select the correct Information'
        }
    },
    jobType: {
        type: String,
        required: true,
        enum: {
            value: [
                "Internship",
                "Contract",
                "Part-Time",
                "Full-Time"
            ],
            message: "Please Enter the Job Type Information"
        },

    }
})

module.exports = mongoose.model('Job', jobschema);