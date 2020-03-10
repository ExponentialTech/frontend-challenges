import axios from 'axios';
const DATA_URL = 'https://raw.githubusercontent.com/ExponentialTech/frontend-challenges/master/data.json';

export default class Api {
    /** Async method to retrieve the table data
     * @returns {Promise<Object>} a promise wrapping the JSON response
     */
    static async getTableData() {
        try {
            return await axios.get(DATA_URL).then((resp) => resp.data);
        } catch (error) {
            console.error('There was an error requesting the table data', error);
        }
    }
}