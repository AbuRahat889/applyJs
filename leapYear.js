function leapYear(year){
    
    if((0 == year  % 4) && ( 0 !== year%100) || (0 == year % 400))
        return true;
    else
        return false;

}

let res = leapYear(1700);
console.log(res);