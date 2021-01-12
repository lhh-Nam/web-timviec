const Recruitment = require('../../Models/Recruitment_Model')
module.exports = {
    allRecruitment: async(req, res) => {
        await Recruitment.find()
            .populate('user')
            .populate('post')
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, err: err })
            })
    },
    allRecruitmentByPost: async(req, res) => {
        await Recruitment.find({ 'post': req.params.id })
            .populate('user')
            .populate('post')
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, err: err })
            })
    }
}