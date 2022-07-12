import axios from "axios";
import { MVCContext } from "../routes/MVCContext";

/**
 * @class DomainSearchController
 */
export class DomainSearchController {

    // reatrive domain search results
    public async search(context: MVCContext): Promise<any> {
            // validate the request: q should be a non empty string
            if (!context.request.query.q) {
                context.response.status(400).send("Bad request: q should be a non empty string or whitespace");
                return;
            }    

            // get the domain search query
            const query = context.request.query.q;
    
            // get the domain search results
            const url = `https://api.domainsdb.info/v1/domains/search?limit=10&domain=${query}`;
            const headers = {
                "Accept": "application/json",
            };

            // get the domain search results from the domainsdb api using axios
            const results = await axios.get(url, { headers });

            // if is null or undefined, return an empty array
            if (!results.data || !results.data.domains) {
                context.response.status(200).send([]);
                return;
            }

            // send the results to the client
            context.response.json(results.data.domains.map((result: any) => {
                return {
                    name: result.domain,
                    country: result.country,
                    created: result.create_date,
                    available: result.isDead ? "No" : "Yes",
                };
            }));
    }
}
