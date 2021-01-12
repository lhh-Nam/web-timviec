const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const axios = require('axios')
const urlDB = "mongodb://localhost:27017/VIET_CV";
mongoose.connect(urlDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.set("useFindAndModify", false);
const server = app.listen(2222, () => {
  console.log("Comment service listen port 2222 !");
});

const io = require("socket.io")(server);
const jwt = require("jwt-then");
io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, "LENGUYENNGOCVIEN");
    socket.userId = payload.id;
    next();
  } catch (err) {
    console.log({ "Socket Err": err });
  }
});

io.on("connection", (socket) => {
  console.log("Connected : " + socket.userId);
  socket.on("disconnect", () => {
    console.log("Disconnected : " + socket.userId);
  });
});
app.get("/", (req, res) => {
  res.json("vien");
});
