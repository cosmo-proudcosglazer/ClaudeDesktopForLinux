Made kind of like a useless project, but still gonna be useful for some people, so, here it is...
# Claude Desktop for Linux
A simple Electron wrapper, made for those who don't want to spend a minute on loading up your browser for just an AI agent.

# Installation

Make sure you have NPM, Node.js and Electron installed:
## For Arch/EndeavourOS/CachyOS:
```
sudo pacman -S npm nodejs
sudo npm install -g electron
```
or:
```
sudo pacman -S electron
```
## For Debian/Ubuntu/Mint:
```
sudo apt install npm
sudo npm install -g electron
```
Then, clone this repo:
```
git clone https://github.com/cosmo-proudcosglazer/ClaudeDesktopForLinux/
```
And finally:
```
cd ~/ClaudeDesktopForLinux
sh install.sh
```
The app should appear in the app launcher, or execute in the terminal to open the wrapper:
```
electron /usr/share/claude-desktop
```

