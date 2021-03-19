
// Simple React Native specific changes
const URI = 'http://192.168.92.2';

export default {
    async fetchCoins() {
        try {
            let response = await fetch(URI + '/api/register');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch(e) {
            console.log(e)
        }
    }
}