/* CURRENT JOB DURATION CALCULATOR:
Breaks down duration into years and months
Current: Cree Inc.  

###START DATE### 
March 2017
 */

//var startDate = Date.parse('March 2017');
var startDate = new Date('2017-03-13'.replace(/-/g, "/"));
var currentDate = Date.now();
var duration = msBreakdown(currentDate - startDate);

document.getElementById("job-duration").innerHTML = duration;

function msBreakdown(msLength) {
    year = 31556952000; //milliseconds in 1 year
    month = 2629746000; //milliseconds in 1 month

    //month 0; if you started in Jan and it's currently Jan of the following year, then true, else false. Used to avoid printing "0 month"
    on_month = false;

    ms_year = Math.floor(msLength / year);
    ms_month = Math.floor((msLength % year) / month);

    if (ms_month == 0) {
        on_month = true;
    } else {
        on_month;
    }

    if (ms_year >= 2) {
        year_string = "years";
    } else {
        year_string = "year";
    }

    if (ms_month >= 2) {
        month_string = "months";
    } else if (ms_month == 0) {
        //If at "0" month, don't show "# month"
        ms_month = ms_month.toString();
        ms_month = "";

        month_string = "";
    } else {
        month_string = "month";
    }

    if (on_month) {
        return "(" + ms_year + " " + year_string + ms_month + month_string + ")"
    } else {
        return "(" + ms_year + " " + year_string + " " + ms_month + " " + month_string + ")"
    }
}
