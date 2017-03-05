#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin

cp -R /Volumes/Kindle/system/userannotlogsDir/* /Users/adam/Desktop/kindle-tracker/logs/

#git commit 'data-update' 
#git push

node /Users/adam/Desktop/kindle-tracker/parse.js