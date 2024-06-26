"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = require("../routes/userRoutes");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/api", userRoutes_1.userRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to my Express API");
});
app.use((err, req, res) => {
    res.status(err.status || 500).send({ error: err.message });
});
exports.default = app;
