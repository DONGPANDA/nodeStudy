/**
 * Created by 96004 on 2017/7/30.
 */
let cron = require('cron');
let CronJob=cron.CronJob;
let job= new CronJob('0 0 22 * * 1,5',function () {
    console.log(new Date().toLocaleString());;
});
job.start();