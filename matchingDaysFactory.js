function matchingDays() {
    

    function getDayOne(date) {

        var d = new Date(date);
        var weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
        var n = weekday[d.getDate()];
        return n;
        }

        function getDayTwo(date) {

            var d = new Date(date);
            var weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            
            var n = weekday[d.getDate()];
            // console.log(n);
            return n;
            
        }

    
    function sameDay(date1, date2) {
        
        var theDate = new Date(date1).getDay();
        var otherDate = new Date(date2).getDay();

        if (theDate === otherDate) {
            return green();
        }
        

    }
    function green() {
        return ("matchColor");
    }
    return {
        getDayOne,
        getDayTwo,
        sameDay,
        green
    }
}