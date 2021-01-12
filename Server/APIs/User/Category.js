const Category = require('../../Models/Category_Model')
module.exports = {
    createCategory: async(req, res) => {
        console.log(req.body)
        await Category.create({...req.body }).then(result => {
            res.json({ success: true, payload: result })
        }).catch(err => {
            res.json({ success: false, errors: err })
        })
    },
    listCategory: async(req, res) => {
        await Category.find().then(result => {
            res.json({ success: true, payload: result })
        }).catch(err => {
            res.json({ success: false, errors: err })
        })
    },
    deleteCategory : async(req,res) =>{
        await Category.findOneAndDelete({_id:req.params.id}).then(result=>{
            res.json({success: true})
        }).catch(err=>{
            res.json({success: false,err:err})
        })
    },
}