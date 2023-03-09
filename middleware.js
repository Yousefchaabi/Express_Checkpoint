const verify = (req, res, next) => {
  var today = new Date();
  var day = today.getDay();
  var time = today.getHours();
  const fs = require("fs");

  let dataR = "";
  fs.readFile("./views/Error.html", (err, data) => {
    dataR = data.toString();
  });

  if (time < 9 || time >= 17 || day == 0 || day == 6) {
    res.redirect("/error");
  } else {
    next();
  }
};
module.exports = verify;
