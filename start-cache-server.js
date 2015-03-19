var multilevelCacheTools = require('multilevel-cache-tools');

multilevelCacheTools.server.create(
  {
    dbPath: 'wordnok-cache.db',
    port: 4444
  },
  function done() {
    console.log('Wordnok cache server started at port 3030.')
  }
);
