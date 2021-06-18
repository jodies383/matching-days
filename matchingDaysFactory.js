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
    function green() {
        return ("matchColor");
    }
    function firstMatch() {
        return ("firstColor");
    }
    function secondMatch() {
        return ("secondColor");
    }
    return {
        getDayOne,
        getDayTwo,
        getDayOneIndex,
        green,
        firstMatch,
        secondMatch
    }
}