"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupExpressApp = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
function SetupExpressApp(app) {
    app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((_req, res, next) => {
        res.setHeader('X-Powered-By', 'Node.js ' + process.version + ' Express.js');
        next();
    });
    app.use((_req, res, next) => {
        if (_req.originalUrl === '/favicon.ico') {
            res.status(204);
            res.end();
        }
        else {
            next();
        }
    });
}
exports.SetupExpressApp = SetupExpressApp;
//# sourceMappingURL=setup.js.map