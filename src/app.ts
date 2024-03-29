import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import router from "router";

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

server.listen(3000, () => console.log("server is running at port 3000"));

const MONDO_URL =
  "mongodb://youzi:helloworld123..@127.0.0.1:27017/express_restful";

mongoose.Promise = Promise;
mongoose.connect(MONDO_URL, {
  authSource: "admin",
});
mongoose.connection.on("error", (err) => console.log(err));

app.use("/", router());
