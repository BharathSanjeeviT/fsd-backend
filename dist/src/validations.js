"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBody = void 0;
const joi_1 = __importDefault(require("joi"));
const userBody = joi_1.default.object({
    name: joi_1.default.string().min(3).max(10).required(),
    emp_id: joi_1.default.string().min(3).max(10).required(),
    email: joi_1.default.string().email().required(),
    department: joi_1.default.string().min(3).max(10).required(),
    role: joi_1.default.string().min(3).max(10).required(),
    doj: joi_1.default.date().required(),
});
exports.userBody = userBody;
