function matchingDays() {

    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDayOne(date) {

        var setDate = new Date(date);

        var getDate = weekday[setDate.getDay()];
        return getDate;
    }

    function getDayTwo(date) {

        var setDate = new Date(date);

        var getDate = weekday[setDate.getDay()];
        return getDate;

    }
    function getDayOneIndex(date) {

        var setDate = new Date(date);

        var getDate = setDate.getDay();
        return getDate
    }
    function sameDayOne(date1, date2) {
        if (getDayOne(date1) === getDayTwo(date2)) {
            return ("matchColor")
        } else if (getDayOne(date1) != getDayTwo(date2)) {
            return ("firstColor")
        }
    }
    function sameDayTwo(date1, date2) {
        if (getDayOne(date1) === getDayTwo(date2)) {
            return ("matchColor")
        } else if (getDayOne(date1) != getDayTwo(date2)) {
            return ("secondColor")
        }
    }
    return {
        getDayOne,
        getDayTwo,
        getDayOneIndex,
        sameDayOne,
        sameDayTwo
    }
}