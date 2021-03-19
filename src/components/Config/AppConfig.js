
// Simple React Native specific changes
const URI = 'http://192.168.92.2:8000';

export default {
    async fetchCoins() {
        console.log('SSSS');
        try {
            let response = await fetch(URI + '/api/register');
            console.log(response);
            let responseJsonData = response.json();
            console.log(responseJsonData);
            return responseJsonData;
        }
        catch(e) {
            console.log(e.response)
        }
    }
}