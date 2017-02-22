const mongoose = require('mongoose');

const SnippetSchema = new mongoose.Schema({
    code: String
});

module.exports = mongoose.model('Snippet', SnippetSchema);
