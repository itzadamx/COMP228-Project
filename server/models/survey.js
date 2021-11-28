let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    title:  String,
    descripton: String,
    type: String,
    questions: Array,
    answer:  Array
},
{
    collection: "survey"
});

module.exports = mongoose.model('survey', surveyModel);