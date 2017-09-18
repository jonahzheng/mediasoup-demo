# TODO

* Migrate from nib to autoprefixer:
https://github.com/postcss/autoprefixer
https://github.com/jescalan/autoprefixer-stylus
https://gist.github.com/ayapi/26d299e4a61d9ac66036

* Use NPM pm2 rather than NPM forever:
https://www.npmjs.com/package/pm2

* Check a TODO in Peers.jsx (bad Redux usage).

* Sometimes when restarting the server:
```
request failed [method:createTransport]:Error: Error: a Transport with same transportId already exists
    at Peer._handleResponse (Peer.js:189)
    at WebSocketTransport.<anonymous> (Peer.js:165)
    at WebSocketTransport.EventEmitter.emit (events.js:88)
    at WebSocket._this2._ws.onmessage (WebSocketTransport.js:43)
```
