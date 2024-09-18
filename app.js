require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { unless } = require("express-unless");
const routes = require("./routes");
const { authenticateRoutes } = require("./config/unlessRoutes");
const { authenticate } = require("./middlewares/auth.middleware");
const CustomError = require("./utils/CustomError");
const globalErrorHandler = require("./controllers/error/errorController");
const app = express();
const path = require('path')
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: false }));


app.use('/api/v1/uploads', express.static(path.join(__dirname, 'uploads')));


app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ message: "Server is working fine!" });
});

authenticate.unless = unless;
app.use(authenticate.unless(authenticateRoutes));


app.use("/api/v1", routes);
app.all("*", (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server!`,
    404
  );
  next(err);
});

app.use(globalErrorHandler);

module.exports = app;
