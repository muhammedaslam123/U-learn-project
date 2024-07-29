import express, { Application } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";





// const Io = sockeIo(server)


const corsOption = {
  origin:"http://localhost:4200",
  // origin:[ "https://ulearn.shop","https://www.ulearn.shop"],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
};




const ExpressConfig = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan("dev"));
  app.use(express.static("public"));
  app.use(compression());
  app.use(cors(corsOption));

};





export default ExpressConfig;

