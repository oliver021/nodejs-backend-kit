"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WheatherController = void 0;
const axios_1 = __importDefault(require("axios"));
class WheatherController {
    async getWheather(context) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&daily=temperature_2m_max&timezone=America%2FLos_Angeles`;
        const headers = {
            "Accept": "application/json",
        };
        const wheather = await axios_1.default.get(url, { headers });
        context.response.json(wheather.data);
    }
}
exports.WheatherController = WheatherController;
//# sourceMappingURL=WheatherController.js.map