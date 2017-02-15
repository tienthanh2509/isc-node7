# SaigonTech Human Resources Management

[![Build Status](https://travis-ci.org/tienthanh2509/isc-node7.svg?branch=master)](https://travis-ci.org/tienthanh2509/isc-node7) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


# Before play
```bash
# Install nodejs && ruby
## Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs ruby
## Windows
#https://nodejs.org/en/download/
#http://rubyinstaller.org/downloads/

# Install Bower, Grunt, Sass
npm install -g bower grunt
gem install sass

# Warning! Make sure you have private key before clone using ssh else try https instead
# Sign your commit with GPG keys
git clone git@github.com:tienthanh2509/isc-node7.git

```

# How to play :)
```bash
cd isc-node7

# Install npm dependencies
npm install
# Install bower dependencies
bower install

# Grunt task "grunt watch" if needed!
# Available task: default, css, js, clean, copy
grunt

# Run nodejs express server | Use PORT env for custom listening port
npm start
```