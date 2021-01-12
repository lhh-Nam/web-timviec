const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.cookie) throw "Forbidden!!";
    const token = req.headers.cookie.split("=")[1];
    console.log(token);
    const payload = await jwt.verify(token, process.env.SECRET);
    req.payload = payload;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Forbidden 🚫🚫🚫",
    });
  }
};
