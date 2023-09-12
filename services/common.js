const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjcyMzcwYmFkZGNhNzRlM2RkNDk0NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0MTc0Mzc0fQ.vwqjDhd52L_lMO5QyRniEjst16rf2sx3ZrEYOAj44j0";

  return token;
};
