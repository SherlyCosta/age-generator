function calAgeInDays() {
    var dobdate = new Date(document.forms["f1"]["t1"].value); 
    var currdate = new Date();
    var diff = (currdate.getTime() - dobdate.getTime()) / (24 * 60 * 60 * 1000); 
    f1.res.value = diff;
}

function calAge() {
    var dobdate = new Date(f1.t1.value); 
    var dobyear = dobdate.getFullYear();
    var dobmonth = dobdate.getMonth();
    var dobday = dobdate.getDate();
    
    var currdate = new Date();
    var curryear = currdate.getFullYear();
    var currmonth = currdate.getMonth(); 
    var currday = currdate.getDate();
    
    var year = curryear - dobyear;
    var month = currmonth - dobmonth;
    var day = currday - dobday;
    
    if (day < 0) {
        if ((curryear % 4 == 0) && (currmonth == 1)) { 
            day += 29;
        } else {
            day += 30; 
            month -= 1;
        }
    }
    if (month < 0) {
        month += 12; 
        year -= 1;
    }
    if (currdate < dobdate) {
        alert("Invalid DOB");
    } else {
        f1.res.value = (year + " years " + month + " months " + day + " days");
    }
}

function calmonths() {
    var dobdate = new Date(f1.t1.value);
    var dobyear = dobdate.getFullYear();
    var dobmonth = dobdate.getMonth();
    var dobday = dobdate.getDate();

    var currdate = new Date();
    var curryear = currdate.getFullYear();
    var currmonth = currdate.getMonth(); 
    var currday = currdate.getDate();

    var year = curryear - dobyear;
    var month = currmonth - dobmonth;
    var day = currday - dobday;

    if (day < 0) {
        if ((curryear % 4 == 0) && (currmonth == 1)) { 
            day += 29;
        } else {
            day += 30; 
            month -= 1;
        }
    }
    if (month < 0) {
        month += 12;
        year -= 1;
    }
    if (currdate < dobdate) { 
        alert("Invalid DOB");
    } else {
        f1.res.value = (year * 12 + month + " months");
    }
}

function caldays() {
    var dobdate = new Date(f1.t1.value); 
    var currdate = new Date();
    var diff = Math.floor((currdate.getTime() - dobdate.getTime()) / (24 * 60 * 60 *1000));
    f1.res.value = diff + " days";
}
