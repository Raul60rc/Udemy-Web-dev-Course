function isLeap(year){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "Leap Year.";
            }else {
                return "Not a leap year";
            }
        }else{
            return "Not a leap year";
        }
    }else {
        return "Not a leap year";
    }
}
isLeap(2023)
