# REDIS

### Introduction

Redis is an open-source tool that works as a background service and allows you to speed up your database queries by providing a volatile cache for it. Redis is some kind of DB, but it allows you to store data in regular memory thus providing much faster access to it. Redis uses almost ubiquitously on the web, so it is important to understand how it works.
### How to install Redis

1) Firstly *(for Windows only)*, install Linux environment layer:
  `wsl --install`
2) Try to install Redis on your Linux subsystem: 
  `sudo apt-get install redis`
3) If previous command doesn't work, try this command first:
  `sudo add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) universe"`

### Working with Redis

1) Start Redis service: `redis-server`
2) Start CLI: `redis-cli`
