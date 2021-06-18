var templateElem = document.querySelector(".daysTemplate").innerHTML

var daysTemplate = Handlebars.compile(templateElem)

var userDataElem = document.querySelector(".days");

var firstDate = document.getElementById("first").value;

var secondDate = document.getElementById("second").value;

var userDataHTML = daysTemplate({
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

});

userDataElem.innerHTML = userDataHTML;

var days = userDataElem.children

let matchFactory = matchingDays();

function getWeek() {
    firstDate = document.getElementById("first").value;
    secondDate = document.getElementById("second").value;

    let day1 = matchFactory.getDayOneIndex(firstDate)
    let day2 = matchFactory.getDayOneIndex(secondDate)
    for (var i = 0; i < days.length; i++) {
        var day = days[i]

        if (matchFactory.getDayOne(firstDate) === matchFactory.getDayTwo(secondDate)) {
            day.classList.remove('secondColor')
            day.classList.remove('firstColor')
            days[day1].classList.add('matchColor')

        }
        else {
            day.classList.remove('firstColor')
            day.classList.remove('matchColor')
            days[day1].classList.add('firstColor')
            if (secondDate) {
                days[day2].classList.add('secondColor')
            }
        }
    }
}
function getWeek2() {
    firstDate = document.getElementById("first").value;
    secondDate = document.getElementById("second").value;

    let day1 = matchFactory.getDayOneIndex(secondDate)
    let day2 = matchFactory.getDayOneIndex(firstDate)
    for (var i = 0; i < days.length; i++) {
        var day = days[i]

        if (matchFactory.getDayOne(firstDate) === matchFactory.getDayTwo(secondDate)) {
            day.classList.remove('secondColor')
            day.classList.remove('firstColor')
            days[day1].classList.add('matchColor')
        }
        else {
            day.classList.remove('secondColor')
            day.classList.remove('matchColor')
            days[day1].classList.add('secondColor')

            if (firstDate) {
                days[day2].classList.add('firstColor')
            }
        }
    }
}
