"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSetIndex = void 0;
const controllers_1 = require("./controllers");
function RouteSetIndex(app) {
    app.get('/', (_req, res) => {
        res.send('Well done!');
    });
    app.get('/json', (_req, res) => {
        res.json({ message: 'Well done!' });
    });
    (0, controllers_1.RouteSetControllers)(app);
}
exports.RouteSetIndex = RouteSetIndex;
//# sourceMappingURL=index.js.map