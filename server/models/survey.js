let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    title:  String,
    questions: String,
    answer:  String
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', surveyModel);