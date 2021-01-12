const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
var cookieParser = require("cookie-parser");
app.use(cookieParser());

var cookieParser = require("cookie-parser");
app.use(cookieParser());

//Mongoose connection:
mongoose.connect(process.env.DB_URL_NAM, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.set("useFindAndModify", false);

//Router config:
const userRouter = require("./Routers/User/Index");
app.use("/user", userRouter);
app.get("/test", (req, res) => {
    res.cookie("cc", "cc").json("vioe");
});

app.get("/test", (req, res) => {
    res.json(req.headers.cookie);
});

// const server
const server = app.listen(5000, () => {
    console.log(`Server listen port 5000!`);
});
const jwt = require("jsonwebtoken");

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

const Comment = require("./Models/Comment_Model");
const User = require("./Models/User_Model");
io.use(async(socket, next) => {
    try {
        const token = socket.handshake.query.token;
        const payload = await jwt.verify(token, process.env.SECRET);
        socket.userId = payload.id;
        next();
    } catch (err) {
        console.log({ "Socket Error": err });
    }
});
let clientss = [];
io.on("connection", (socket) => {
    clientss.push(socket.userId);
    console.log(clientss);
    io.emit("onlineUser", clientss);
    socket.on("disconnect", () => {
        console.log("Disconnected: " + socket.userId);
        clientss = clientss.filter((e) => {
            return e !== socket.userId;
        });
        io.emit("onlineUser", clientss);
    });
    socket.on("joinProduct", async({ roomID }) => {
        socket.join(roomID);
        await Comment.find({ product: roomID })
            .populate("user")
            .then((result) => {
                io.to(roomID).emit("fetchAllComment", {
                    result,
                });
            })
            .catch((err) => console.log("Fetch comment err !"));
        console.log(socket.userId + `-joined room ${roomID}`);
    });
    socket.on("allCMT", async({ roomID, comment }) => {
        const user = await User.findById(socket.userId);
        console.log(comment);
        const newComment = {
            user: user,
            post: roomID,
            description: comment,
            createdAt: new Date(),
        };
        const commentForData = {
            user: socket.userId,
            post: roomID,
            description: comment,
        };
        io.to(roomID).emit("newComment", {
            newComment,
        });
        await Comment.create(commentForData)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => console.log(err));
    });
    socket.on("leaveProduct", ({ roomID }) => {
        socket.leave(roomID);
        console.log(socket.userId + " leave room");
    });
});