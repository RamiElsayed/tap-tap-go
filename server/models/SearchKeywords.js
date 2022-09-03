const { Schema, model } = require('mongoose');

const searchKeywordsSchema = new Schema({});

const SearchKeywords = model('SearchKeywords', searchKeywordsSchema);

module.exports = Review;
