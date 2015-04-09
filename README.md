level-cache-server
======================

A memoizing cache server. It runs on a port (4444 by default), waiting for db requests over RPC.

Installation
------------

Clone this repo.

**Or, as a module:**

    npm install --save level-cache-server

Usage
-----

    node start-cache-server --port 9999 --dbPath my-cache-db

Now you can memoize a function via [multilevel-cache-tools](https://github.com/jimkang/multilevel-cache-tools) that will use this db to get values (via RPC on port 9999) if they've already been computed.

**As a module in your project:**

    node node_modules/.bin/level-cache-server --port 6000 --dbPath your-cache.db

(As a module, it's intended to deploy as part of another project, but run in its own process. You probably want a supervisor process like PM2 or Forever running it.)

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
