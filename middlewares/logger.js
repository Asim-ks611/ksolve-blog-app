// const jwt = require("jsonwebtoken");

const logger = function (req, res, next) {
    let currentTime = Date.now();
    let method = req.method;
    let path = req.url;
    let status = res.statusCode;
    res.on("finish", async () => {
      try {
        let timeTaken = Date.now() - currentTime;
        let log = `${method}: ${path}: ${status}: ${timeTaken} ms:`;
        console.log(log);
      } catch (error) {
        console.log(error);
      }
    });
    next();
};

module.exports = logger;