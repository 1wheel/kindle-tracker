Code for www.roadtolarissa.com/kindle-tracker to copy your kindle reading logs to your computer and parse them.

```
*/10 * * * * /Users/adam/Desktop/kindle-tracker/update.sh
```

Sets up a cron job to run `update.sh` every 10 minutes. In `update.sh`, modify the paths to point to this repo on your local computer: 

`cp -R /Volumes/Kindle/system/userannotlogsDir/* /Users/adam/Desktop/kindle-tracker/logs/`

Parsed logs are saved in `public/` which also contains some rudimentary visualization code.   
