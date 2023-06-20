"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserCourseService_1 = require("../../../Service/UserCourseService");
const UserCourseServiceInterface_1 = require("../../../../applications/Services/UserCourseServiceInterface");
const CourseRegisterController_1 = __importDefault(require("../../../../Adapters/Controller/CourseRegisterController"));
const AddCoureseDb_1 = require("../../../Database/MongoDb/Repositories/AddCoureseDb");
const CourseReppo_1 = __importDefault(require("../../../../applications/Repositories/CourseReppo"));
// import multer from "multer";
const multer_1 = require("../../Middilewear/multer");
// const upload = multer({ dest: "uploads/" });
const app = express_1.default.Router();
const Controller = (0, CourseRegisterController_1.default)(AddCoureseDb_1.CourseDatabase, CourseReppo_1.default, UserCourseService_1.UserCorseService, UserCourseServiceInterface_1.UserCourseServiceInterface);
// app.post("/addCourse",Controller.addCourseDatails);
app.post("/addCourse", multer_1.upload.single("CourseImage"), Controller.addCourseDatails);
app.get("/", Controller.GetallCourses);
app.get("/dashBoard", Controller.GetCourses);
app.get("/Allcourse", Controller.Allcourse);
app.get("/courseDetails", Controller.GetCourse);
app.get("/placeOrder", Controller.placeOrderGetDetails);
app.get("/getMyCourse", Controller.getMyCourse);
app.get("/removeCourse", Controller.removeCourse);
// app.post("/placeOrder",Controller.paymentSuccess);
// // app.get("/paymentSuccess",Controller.paymentSuccess);
exports.default = app;
