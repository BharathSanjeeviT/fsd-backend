"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.BASE_ROUTE = void 0;
const express_1 = require("express");
const validations_1 = require("./validations");
const config_1 = __importDefault(require("../config"));
const router = (0, express_1.Router)();
exports.router = router;
const BASE_ROUTE = '/api/v1/';
exports.BASE_ROUTE = BASE_ROUTE;
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = validations_1.userBody.validate(req.body);
    if (data.error) {
        res.json({
            status: 403,
            message: data.error.message
        });
    }
    else {
        const db_query = 'INSERT INTO users (name, emp_id, email, department, role, doj) VALUES ($1, $2, $3, $4, $5, $6)';
        const user_data = data.value;
        try {
            yield (0, config_1.default)(db_query, [
                user_data.name,
                user_data.emp_id,
                user_data.email,
                user_data.department,
                user_data.role,
                user_data.doj
            ]);
            res.json({
                status: 200,
                message: 'User created'
            });
        }
        catch (err) {
            res.json({
                status: 404,
                message: err.detail
            });
        }
    }
}));
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db_query = 'SELECT * FROM users';
    try {
        const users = yield (0, config_1.default)(db_query, []);
        res.json({
            status: 200,
            data: users.rows
        });
    }
    catch (err) {
        res.json({
            status: 404,
            message: err.detail || "ERR"
        });
    }
}));
