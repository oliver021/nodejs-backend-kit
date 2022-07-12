"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSetControllers = void 0;
const WheatherController_1 = require("../controllers/WheatherController");
const MVCContext_1 = require("./MVCContext");
function RouteSetControllers(app) {
    app.get('/demo/wheather', async (req, res) => {
        const context = new MVCContext_1.MVCContext(req, res);
        let ctrl = new WheatherController_1.WheatherController();
        await ctrl.getWheather(context);
    });
}
exports.RouteSetControllers = RouteSetControllers;
//# sourceMappingURL=controllers.js.map