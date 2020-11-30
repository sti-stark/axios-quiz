const mongoose = require('mongoose')

const Quiz = mongoose.model('quiz', {
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer1: {
        type: String,
        required: true,
        trim: true
    },
    answer2: {
        type: String,
        required: true,
        trim: true
    },
    answer3: {
        type: String,
        required: true,
        trim: true
    },
    answer4: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = Quiz