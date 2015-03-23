var multilevelCacheTools = require('multilevel-cache-tools');
var jsonfile = require('jsonfile');
var _ = require('lodash');

var opts = _.defaults(
  jsonfile.readFileSync(__dirname + '/server-opts.json', {throws: false}) || {},
  {
    dbPath: 'level-cache.db',
    port: 4444
  }
);

multilevelCacheTools.server.create(opts, done);

function done() {
  console.log(
    'Level cache server started at port', opts.port,
    'using', opts.dbPath
  );
}
