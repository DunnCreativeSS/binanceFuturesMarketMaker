const binance = require('node-binance-api')().options({
  APIKEY: '5HaqY5eVWEyPaubcF9yTsvZyl0RatPvCZmnDB5HhxK4d4renDXN1JnpLOfasOkZG',
  APISECRET: 'ZkR1p0ERhrL0RsEBowmkB1oeVM8kJgxpLpxPISeMS2hrZYIyRnzcc9DJDRTLMv1W',
  useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});
var btc = 0;
const ccxt = require('ccxt')
binance_futures = new ccxt.binance(
            {"apiKey": "W58pdOrINzXJCE3HXOgM8eY5f5UhJwoLhyO2eyftGvTZO6RKEVUgWzx8l3kh673o",
            "secret": "GLWOH6kOcraAatmbysPXCzY96JOepMC8bo970s69lfPjmbo0DqGkF0hfgketSpQq",
            "options":{"defaultMarket":"futures"},
            'urls': {'api': {
                                     'public': 'https://fapi.binance.com/fapi/v1',
                                     'private': 'https://fapi.binance.com/fapi/v1',},}})
var btcstart = 64
var btcs = []
var ids = []
var vol = 58.88
setInterval(async function(){
trades = await binance_futures.fapiPrivateGetUserTrades({'symbol':'BTCUSDT', 'limit': 1000})
for (var t in trades){
  if (!ids.includes(trades[t].id)){
    ids.push(trades[t].id)
vol+=parseFloat(trades[t].qty)

  }

}
bal = await binance_futures.fetchBalance()
btc = (bal.info.totalMarginBalance)
}, 5500)

const express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var request = require("request")
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 80, function() {});
app.get('/update', cors(), (req, res) => {
console.log(btc)
if (btc != 0){
btcs.push( [new Date().getTime(), -1 * (1-(btc / btcstart)) * 100])
}
console.log('start: ' + btcstart)
    res.json({btc: btcs, qty: vol})

})

app.get('/', (req, res) => {
        res.render('index.ejs', {
            btc: btc
        })

});
