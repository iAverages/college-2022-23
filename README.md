# College

This repository contains code that I worked on at college, C# and JS/TS.

Our machines did not have node installed so this repository contains node v16 bin and a script to setup the terminal to work
correctly.

## Setup

### Git

> You will need to download git and set it up to work on the college systems

Another piece of software my college does not have, git. Git can be installed using the installer since it does not need
admin access.

You will need to run the command below to tell git to trust the self signed cert college uses

```bash
git config --global http.sslBackend schannel
```

> If git cannot be found in cmd, restart it so the path env is updated

### Node

Since the college machines do not have Node installed, I have included Node v16 inside this repository.

To get Node working on the machine you need to open cmd to the folder containing this repository and type `setup.bat`. This
will run a few commands to setup node, npm and npx and allow them to work hopefully without issues.

> Node will only work in that terminal session, if you close cmd at all you will need to re-run the script.
