const basicAuth = require("basic-auth");

module.exports.authenticateSwagger = (req, res, next) => {
  const user = basicAuth(req);

  if (!user || user.name !== "admin" || user.pass !== "admin") {
    res.set("WWW-Authenticate", 'Basic realm="example"');
    return res.status(401).send("Authentication required.");
  }
  next();
};
