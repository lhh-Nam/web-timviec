const Location = require('../../Models/Location_Model')
module.exports = {
    createLocation: async(req, res) => {
        await Location.create({...req.body }).then(result => {
            res.json({ success: true, payload: result })
        }).catch(err => {
            res.json({ success: false, errors: err })
        })
    },
    listLocation: async(req, res) => {
        await Location.find().then(result => {
            res.json({ success: true, payload: result })
        }).catch(err => {
            res.json({ success: false, errors: err })
        })
    },
    deleteLocation : async(req,res) =>{
        await Location.findOneAndDelete({_id:req.params.id}).then(result=>{
            res.json({success: true})
        }).catch(err=>{
            res.json({success: false,err:err})
        })
    },
}