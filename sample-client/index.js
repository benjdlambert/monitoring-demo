let StatsD = require('node-statsd'),
    client = new StatsD();

setInterval(function() {
    client.timing('response_time', 42 * (Math.random() * 10));
    client.increment('requests');
}, 1000)


