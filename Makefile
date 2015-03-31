HOMEDIR = $(shell pwd)
GITDIR = /var/repos/level-cache-server.git
PM2 = $(HOMEDIR)/node_modules/pm2/bin/pm2

start:
	$(PM2) start -f start-cache-server.js --name level-cache || \
	echo "level-cache has already been started."

stop:
	$(PM2) stop level-cache || echo "Didn't need to stop process."

start-namedlevels:
	$(PM2) start -f start-cache-server.js --name namedlevels-cache -- namedlevels-server-opts.json || \
	echo "namedlevels-cache has already been started."

stop-namedlevels:
	$(PM2) stop namedlevels-cache || echo "Didn't need to stop process."


sync-worktree-to-git:
	git --work-tree=$(HOMEDIR) --git-dir=$(GITDIR) checkout -f

npm-install:
	cd $(HOMEDIR)
	npm install
	npm prune

post-receive: sync-worktree-to-git npm-install stop start stop-namedlevels start-namedlevels
