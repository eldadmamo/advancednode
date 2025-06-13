const mongoose = require('mongoose');
const validator = require('validator')

const jobschema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter Job Title'],
        trim: true,
        maxLength: [100, 'Job Title can not exceed 100 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please enter Job Description'],
        maxLength: [1000, 'Job Description can not exceed 1000 characters']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please add a valid Email Address'],
        required: ['Please Enter email Address']
    },
    company: {
        type: String, 
        required: [true, 'Please add Company Name']
    },
    industry: {
        type: [String],
        required: true,
        enum: {
            value: [
                'Business',
                'Information Technology',
                'Banking',
                'Education/Technology',
                'Telecommunication',
                'Others'
            ],
            message: 'Please select correct options for industry'
        }
    },
    jobType: {
        type: String,
        required: true,
        enum: {
            values: [
                'Permanent',
                'Temporary',
                'Internship'
            ],
            message:'Please select correct options for job type'
        }
    },
    positions: {
        type: Number,
        default: 1
    },
    experience: {
        type: String,
        required: true,
        enum: {
            values: [
                'No Experience',
                '1 year - 2 year',
                '2 year - 3 year',
                '3 year - 4 year',
                '4 year - 5 year',
                '5 year - above'
            ],
            message: 'Please select the real experience'
        }
    },
    salary: {
        type: Number,
        required: [true, "please enter expected salary for this job"]
    },
    postingDate: {
        type: Date,
        default: Date.now
    },
    lastDate: {
        type: Date,
        default: new Date().setDate(new Date().getDate() + 7)
    },
    applicantsApplied: {
        type: [Object],
        select: false
    }
})

module.exports = mongoose.model('Job', jobschema);