#!/bin/sh
PATH=/usr/local/bin:/usr/local/sbin:~/bin:/usr/bin:/bin:/usr/sbin:/sbin

if [ -d /Volumes/Kindle/ ]; then
  # Control will enter here if $DIRECTORY exists.
  cp -R /Volumes/Kindle/system/userannotlogsDir/* /Users/adam/Desktop/kindle-tracker/logs/
  node /Users/adam/Desktop/kindle-tracker/parse.js

  # uncomment to auto upload
  # git commit 'data-update' 
  # git push
fi




