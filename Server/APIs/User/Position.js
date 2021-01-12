const Position = require('../../Models/Position_Model')
module.exports = {
    createPosition: async(req, res) => {
        await Position.create({...req.body }).then(result => {
            res.json({ success: true, payload: result })
        }).catch(err => {
            res.json({ success: false, errors: err })
        })
    },
    listPosition: async(req, res) => {
        await Position.find().then(result => {
            res.json({ success: true, payload: result })
        }).catch(err => {
            res.json({ success: false, errors: err })
        })
    },
    deletePosition : async(req,res) =>{
        await Position.findOneAndDelete({_id:req.params.id}).then(result=>{
            res.json({success: true})
        }).catch(err=>{
            res.json({success: false,err:err})
        })
    },
}