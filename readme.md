pip install --upgrade https://github.com/msuozzo/Lector/tarball/master


how to copy folder after usb drive inserted
- https://www.macissues.com/2014/07/16/how-to-set-up-and-use-folder-actions-on-your-mac/
- http://www.jbmurphy.com/2011/07/15/os-x-running-a-script-when-a-usb-drive-is-inserted/
- http://apple.stackexchange.com/questions/8090/how-to-run-applescript-on-disk-mount
- http://macscripter.net/viewtopic.php?id=24748
- http://www.launchd.info/


cp -R /Volumes/Kindle/system/userannotlogsDir/* /Users/adam/Desktop/kindle-tracker/logs/


chmod +x update.sh

*/10 * * * * /Users/adam/Desktop/kindle-tracker/update.sh