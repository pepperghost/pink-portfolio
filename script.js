/* CURRENT JOB DURATION CALCULATOR:
Breaks down duration into years and months
Current: Cree Inc.  Started March 2017 
 */

var startDate = Date.parse('March 2017');
var currentDate = Date.now();
var duration = msBreakdown(currentDate - startDate);

document.getElementById("job-duration").innerHTML = duration;

function msBreakdown (msLength) {
    year = 31556952000;
    month = 2629746000;
    
    ms_year = Math.floor(msLength / year);
    ms_month = Math.floor((msLength%year)/month);
    
    if (ms_year >= 2) {
        year_string = "years";
    } else {
        year_string = "year";
    }
    
    if (ms_month >= 2) {
        month_string = "months";
    } else {
        month_string = "month";
    }
    
    return "(" + ms_year + " " + year_string + " + " + ms_month + " " + month_string + ")"
}