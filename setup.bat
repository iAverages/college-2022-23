@echo off

@REM This does not work atm dont use

set path=%path%;%cd%\bin\node-v16.18.0-win-x64
NODE_TLS_REJECT_UNAUTHORIZED=0 npm i
npm config set strict-ssl false 

echo "Added Node v16 to path for terminal session."
echo ""
echo "You will need to run this setup script for every terminal session where you want to use node"