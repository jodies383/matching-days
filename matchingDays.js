var templateElem = document.querySelector(".daysTemplate").innerHTML

var daysTemplate = Handlebars.compile(templateElem)

var userDataElem = document.querySelector(".days");

var firstDate = document.getElementById(".first");

var secondDate = document.getElementById(".second");

var userDataHTML = daysTemplate({
    day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

});

userDataElem.innerHTML = userDataHTML;
var days = userDataElem.children

let matchFactory = matchingDays();

function getWeek() {

    // matchFactory.getDayOne(firstDate)
    for (var i = 0; i<days.length; i++){
        var day = days[i]
          console.log(day + "dfdfdfd");

        days[i].classList.remove('firstColor')
        days[i].classList.remove('secondColor')
        days[i].classList.remove('matchColor')
    }
    if (matchFactory.getDayOne(firstDate) === matchFactory.getDayTwo(secondDate)) {
       userDataElem.classList.add(matchFactory.green(matchFactory.sameDay(firstDate,)))
    }
    
    else if(matchFactory.getDayOne(firstDate) != matchFactory.getDayTwo(secondDate,secondDate)){
        if(matchFactory.getDayOne(firstDate) ){
            days[matchFactory.getDayOne(firstDate)].classList.remove('firstColor')

        }

        else if(matchFactory.getDayTwo(secondDate)){
            days[matchFactory.getDayOne(secondDate)].classList.remove('secondColor')
        }
    }


}

