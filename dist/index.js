"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('hahaha');
});
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log('server is fckn running');
});
//# sourceMappingURL=index.js.map