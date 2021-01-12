const Post = require('../../Models/Post_Model')
module.exports = {
    deletePost : async(req,res) =>{
        await Post.findOneAndDelete({_id:req.params.id}).then(result=>{
            res.json({success: true})
        }).catch(err=>{
            res.json({success: false,err:err})
        })
    },
    listPostSortByMaxSalary: async(req, res) => {
        await Post.find()
            .populate('user')
            .populate('category')
            .populate('location')
            .populate('position')
            .sort({ maxSalary: -1 })
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, errors: err })
            })
    },
    listPostSortByMinSalary: async(req, res) => {
        await Post.find()
            .populate('user')
            .populate('category')
            .populate('location')
            .populate('position')
            .sort({ maxSalary: 1 })
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, errors: err })
            })
    },
    listPost: async(req, res) => {
        await Post.find(req.query)
            .populate('user')
            .populate('category')
            .populate('location')
            .populate('position')
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, errors: err })
            })
    },
    listPostByLocation: async(req, res) => {
        console.log(req.params.idLocation)
        await Post.find({ 'location': req.params.idLocation })
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, errors: err })
            })
    },
    listPostByPosition: async(req, res) => {
        console.log(req.params.idPosition)
        await Post.find({ 'position': req.params.idPosition })
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, errors: err })
            })
    },
    listPostByCategory: async(req, res) => {
        console.log(req.params.idCategory)
        await Post.find({ 'category': req.params.idCategory })
            .then(result => {
                res.json({ success: true, payload: result })
            }).catch(err => {
                res.json({ success: false, errors: err })
            })
    }
}