@echo off

echo Welcome back to suffering :-)

@REM My college does not have node installed, a node bin is inside this
@REM repo so I do not have to download it everytime manaully.

echo Adding Node v16 to path for terminal session
set path=%path%;%cd%\bin\node-v16.18.0-win-x64

@REM My college basically has MITM attacks to monitor network traffic of all machines
@REM They use a self signed SSL cert which is registered on the windows cert manager thing
@REM however most cli tools dont use this by default so lots of network request will error 
@REM out due to the cert being self signed. strict-ssl makes npm and npx work 
@REM NODE_TLS_REJECT_UNAUTHORIZED makes prisma work as it uses fetch to download the engine

echo Setting strict-ssl to false in global config and ignoring TLS rejection errors
set NODE_TLS_REJECT_UNAUTHORIZED=0
npm config set strict-ssl false 

echo
echo You will need to run this setup script for every terminal session where you want to use node
echo All changes (except strict-ssl setting) are only applied to the terminal session where this script is executed
