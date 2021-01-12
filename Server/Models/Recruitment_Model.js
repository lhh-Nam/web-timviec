const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recruitmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    cv: String
}, { timestamps: true });

const Recruitment = mongoose.model('Recruitment', recruitmentSchema);
module.exports = Recruitment;