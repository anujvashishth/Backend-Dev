import axios from "axios";
import request from "request";

let API_KEY = "XYVUQ52IWN5SRNBQ";
async function stockdata(){
    try {
        


// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=${API_KEY}`;

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});

        
    } catch (error) {
        console.log("create stock data");
        
    }
}

export default stockdata;