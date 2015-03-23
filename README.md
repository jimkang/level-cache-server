multilevel-cache-server
======================

A memoizing cache server. It runs on a port (4444 by default), waiting for db requests over RPC.

Installation
------------

Clone this repo, then create a `server-opts.json` file that looks like this:

    {
      "dbPath": "my-cache.db",
      "port": 9999
    }

(`server-opts.json` is in the .gitignore, so it won't get committed to your repo.)

Also, feel free to edit the Makefile to change the PM2 process name from level-cache to whatever you want.

Usage
-----

    make start

Now you can memoize a function via [multilevel-cache-tools](https://github.com/jimkang/multilevel-cache-tools) that will use this db to get values if they've already been computed.

To stop:

    make stop

License
-------

MIT.
