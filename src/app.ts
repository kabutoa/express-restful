import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";

import router from "router/index.js";
import { ENV_CONFIG } from "config/env.js";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(ENV_CONFIG.PORT, () =>
  console.log(`server is running at port ${ENV_CONFIG.PORT}`)
);

mongoose.Promise = Promise;
mongoose.connect(ENV_CONFIG.MONGO_URL, {
  authSource: "admin",
});
mongoose.connection.on("error", (err) => console.log(err));

app.use("/", router());
