import { MVCContext } from "../routes/MVCContext";
import axios from "axios";

export class WheatherController {

    /**
     * @param {MVCContext} context
     * @returns {Promise<void>}
     */
    public async getWheather(context: MVCContext): Promise<void> {

        // prepare http request to get wheather data
        const url = `https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&daily=temperature_2m_max&timezone=America%2FLos_Angeles`;
        const headers = {
            "Accept": "application/json",
        };

        // get the wheather from the wheather google api
        const wheather = await axios.get(url, { headers });
        
        // send the wheather to the client
        context.response.json(wheather.data);
    }
}