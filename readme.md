Code for www.roadtolarissa.com/kindle-tracker.

```
*/10 * * * * /Users/adam/Desktop/kindle-tracker/update.sh
```

Will set up a cron job to run `update.sh` every 10 minutes. It'll copy your kindle reading logs to your computer and parse them.

`public/` has some rudimentary code to visualize the logs.  