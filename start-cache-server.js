var multilevelCacheTools = require('multilevel-cache-tools');
var _ = require('lodash');

var cmdOpts = require('nomnom')
  .option(
    'port',
    {
      abbr: 'p',
      help: 'The port number on which to run the cache server.'
    }
  )
  .option(
    'dbPath',
    {
      abbr: 'db',
      help: 'The path to the LevelDB directory to use for the cache.'
    }
  )
  .parse();


var defaultServerOpts = {
  dbPath: __dirname + '/' + 'level-cache.db',
  port: 4444
};

var serverOpts = _.defaults(cmdOpts, defaultServerOpts);

multilevelCacheTools.server.create(serverOpts, done);

function done() {
  console.log(
    'Level cache server started at port', serverOpts.port,
    'using', serverOpts.dbPath
  );
}
