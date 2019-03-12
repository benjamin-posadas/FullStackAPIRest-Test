var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TickerSchema = Schema({
        book: String,
        volume: String,
        high: String,
        last: String,
        low: String,
        vwap: String,
        ask: String,
        bid: String,
        created_at: String
    });

module.exports = mongoose.model('Ticker',TickerSchema);