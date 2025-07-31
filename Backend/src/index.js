const express = require("express");
const bodyParser = require("body-parser");
const { db } = require("./database/index");
const { userRouter } = require("./route/user/userRoute.js");
const { authRouter } = require("./route/auth/authRouter.js");
const dotenv = require("dotenv");
const { authenticateToken } = require("./middleware/token-middleware");
const router = require("./route/uploadRoutes");
const { createUploadsFolder } = require("./security/helper");
const cors = require("cors");
const { productRouter } = require("./route/product/productRoute");
const path = require("path");

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(authenticateToken);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
// app.use("/api/file", router);
app.use("/api/product", productRouter);
createUploadsFolder();
app.listen(port, function () {
  console.log("project running in port", port);
  db();
});
module.exports = app;
