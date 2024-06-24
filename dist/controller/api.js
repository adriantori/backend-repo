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
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = exports.fetchUserData = exports.updateUserData = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const ApiError_1 = require("../entities/ApiError");
const updateUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, userData } = req.body;
        yield firebaseConfig_1.db.collection('USERS').doc(userId).set(userData, { merge: true });
        res.status(200).send({ message: 'User data updated successfully' });
    }
    catch (error) {
        next(new ApiError_1.ApiError('Failed to update user data', 500));
    }
});
exports.updateUserData = updateUserData;
const fetchUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const userDoc = yield firebaseConfig_1.db.collection('USERS').doc(userId).get();
        if (!userDoc.exists) {
            throw new ApiError_1.ApiError('User not found', 404);
        }
        res.status(200).send(userDoc.data());
    }
    catch (error) {
        next(error);
    }
});
exports.fetchUserData = fetchUserData;
const helloWorld = (res) => {
    res.status(200).send("hello world");
};
exports.helloWorld = helloWorld;
