HOMEDIR = $(shell pwd)
GITDIR = /var/repos/wordnok-cache.git
PM2 = $(HOMEDIR)/node_modules/pm2/bin/pm2

start:
	$(PM2) start start-cache-server.js --name wordnok-cache || \
	echo "wordnok-cache has already been started."

stop:
	$(PM2) stop wordnok-cache || echo "Didn't need to stop process."

sync-worktree-to-git:
  git --work-tree=$(HOMEDIR) --git-dir=$(GITDIR) checkout -f

npm-install:
	cd $(HOMEDIR)
	npm install
	npm prune

post-receive: sync-worktree-to-git npm-install stop start
