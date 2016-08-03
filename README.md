# Monitoring Stack

### Node -> Telegraf -> InfluxDB -> Grafana

#### Setup

```sh
$ brew install grafana/grafana
$ brew install telegraf
$ brew install influxdb

$ grafana start &
$ telegraf -config telegraf.config &
$ influxd &

$ cd sample-client
$ npm install
$ node index.js
```

Navigate to Grafana and start playing with metrics.

```
http://localhost:8082
