const User = require("../../Models/User_Model");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const Post = require("../../Models/Post_Model");
const Recruitment = require("../../Models/Recruitment_Model");
cloudinary.config({
    cloud_name: process.env.CLOUNDINARY_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_SECRET_KEY,
});

module.exports = {
    register: async(req, res) => {
        //console.log(req.body)
        let tempUrl = "";
        await cloudinary.uploader
            .upload(req.body.image)
            .then((result) => {
                tempUrl = result.url;
            })
            .catch((err) => {
                console.log(err);
            });
        //console.log(tempUrl);

        await User.findOne({
                userName: req.body.userName,
            })
            .then((user) => {
                if (user) {
                    res.json({
                        register: false,
                        message: "UserName is available !",
                    });
                } else {
                    User.create({
                        email: req.body.email,
                        password: req.body.password,
                        image: tempUrl,
                        phone: req.body.phone,
                        name: req.body.name,
                        address: req.body.address,
                        userName: req.body.userName,
                        isEmployer: req.body.isEmployer,
                    });
                    res.json({
                        register: true,
                        message: "Success",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                res.json({
                    register: false,
                    err: err,
                });
            });
    },
    login: async(req, res) => {
        //console.log(req.body);
        await User.findOne({
                userName: req.body.userName,
            })
            .then(async(user) => {
                if (user) {
                    if (user.password == req.body.password) {
                        const token = await jwt.sign({
                                id: user.id,
                                name: user.name,
                                isEmployer: user.isEmployer,
                            },
                            process.env.SECRET, { expiresIn: 60 * 60 }
                        );
                        res.cookie("x_auth", token).json({
                            success: true,
                            token,
                        });
                    } else {
                        res.json({
                            success: false,
                            message: "User name or password not match !",
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        message: "User name or password not match !",
                    });
                }
            })
            .catch((err) => {
                res.json({ err: err });
            });
    },
    getProfile: async(req, res) => {
        //console.log(req.payload);
        await User.findById(req.payload.id)
            .then((result) => {
                res.json({ message: true, payload: result });
            })
            .catch((err) => {
                res.json({ message: false, err: err });
            });
    },
    postRecruitment: async(req, res) => {
        if (req.payload.isEmployer === false) {
            await Recruitment.find({
                user: req.payload.id,
                post: req.body.idPost,
            }).then(async(result) => {
                if (result.length > 0) {
                    res.json({ success: false, message: "Recruitment is available !" });
                } else {
                    let tempUrl = "";
                    await cloudinary.uploader
                        .upload(req.body.cv)
                        .then((result) => {
                            tempUrl = result.url;
                        })
                        .catch((err) => {
                            console.log({ 1: err });
                        });
                    console.log(tempUrl);
                    await Recruitment.create({
                            user: req.payload.id,
                            post: req.body.idPost,
                            cv: tempUrl,
                        })
                        .then((result) => {
                            console.log(result)
                            res.json({ success: true, payload: result });
                        })
                        .catch((err) => {
                            res.json({ success: false, errors: err });
                        });
                }
            });
        }
    },
    employerPost: async(req, res) => {
        if (req.payload.isEmployer === true) {
            await Post.create({
                    user: req.payload.id,
                    ...req.body,
                })
                .then((result) => {
                    res.status(200).json({ success: true, payload: result });
                })
                .catch((err) => {
                    res.status(404).json({ success: false, errors: err });
                });
        } else {
            res.json({ success: false, message: "Not authenticate !" });
        }
    },
    listUser: async(req, res) => {
        await User.find().then(result => {
            res.json({ message: true, payload: result })
        }).catch(err => {
            res.json({ message: false, err: err })
        })
    }
};