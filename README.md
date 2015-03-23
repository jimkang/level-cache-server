multilevel-cache-server
======================

A memoizing cache server. It runs on a port (4444 by default), waiting for db requests over RPC.

Installation
------------

Clone this repo, then create a config.js file that looks like this:


    module.exports = {
      port: 9999
    };

Usage
-----

    make start

Now you can memoize a function via [multilevel-cache-tools](https://github.com/jimkang/multilevel-cache-tools) that will use this db to get values if they've already been computed.

To stop:

    make stop

License
-------

MIT.
