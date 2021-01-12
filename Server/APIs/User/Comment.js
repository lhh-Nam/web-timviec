const Commet = require('../../Models/Comment_Model')
module.exports = {
    allComment: async(req, res) => {
        await Commet.find()
            .populate('post')
            .populate('user')
            .then(reuslt => {
                res.json({ success: true, payload: reuslt })
            }).catch(err => {
                res.json({ success: false, error: err })
            })
    },
    commentByProductID: async(req, res) => {
        console.log(req.params.id)
        await Commet.find({ 'post': req.params.id })
            .populate('user').then(reuslt => {
                res.json({ success: true, payload: reuslt })
            }).catch(err => {
                res.json({ success: false, err: err })
            })
    }
}