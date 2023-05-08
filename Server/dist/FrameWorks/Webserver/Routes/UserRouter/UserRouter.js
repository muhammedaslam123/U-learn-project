"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRegister_1 = __importDefault(require("../../../../Adapters/Controller/UserRegister"));
const UserDb_1 = require("../../../Database/MongoDb/Repositories/UserDb");
const UserReppo_1 = __importDefault(require("../../../../applications/Repositories/UserReppo"));
const UserAuthService_1 = require("../../../Service/UserAuthService");
const UserAuthserviceInterFacw_1 = require("../../../../applications/Services/UserAuthserviceInterFacw");
const app = express_1.default.Router();
const Controller = (0, UserRegister_1.default)(UserDb_1.UserDatabase, UserReppo_1.default, UserAuthService_1.UserAuthService, UserAuthserviceInterFacw_1.UserAuthServiceInterFace);
app.post('/signup', Controller.Dosignup);
app.post('/login', Controller.DoLogin);
exports.default = app;
