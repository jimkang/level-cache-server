var multilevelCacheTools = require('multilevel-cache-tools');

var port = 4444;

multilevelCacheTools.server.create(
  {
    dbPath: 'wordnok-cache.db',
    port: port
  },
  function done() {
    console.log('Wordnok cache server started at port ', port);
  }
);
