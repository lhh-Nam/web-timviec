const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    jobDescription: String,
    requirement: String,
    benefit: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    duration: Date,
    quantity: Number,
    position: {
        type: Schema.Types.ObjectId,
        ref: 'Position'
    },
    location : {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    },
    maxSalary: Number,
    minSalary: Number
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;