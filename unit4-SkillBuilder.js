// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
const title = document.createElement('div');
title.setAttribute('style', 'text-align: center');
title.innerHTML = '<h1>Social Calendar</h1>';
document.body.appendChild(title);

// Create a new dropdown element (the dropdown menu)
var dropdown = document.createElement("select");

// Create some options for the dropdown menu
var option1 = document.createElement("option");
option1.innerHTML = "Show All";
var option2 = document.createElement("option");
option2.innerHTML = "Week 1";
var option3 = document.createElement("option");
option3.innerHTML = "Week 2";
var option4 = document.createElement("option");
option4.innerHTML = "Week 3";

// Add the options to the select element
dropdown.appendChild(option1);
dropdown.appendChild(option2);
dropdown.appendChild(option3);
dropdown.appendChild(option4);

// Add the dropdown element to the page
title.appendChild(dropdown);

dropdown.addEventListener('change', function() {
  // Get the value of the selected option
  var selectedOption = this.options[this.selectedIndex].value;
  if (this.selectedIndex === 0) {
    let weeks = document.getElementsByClassName('weekContainer')
    for (let i = 0; i < weeks.length; i++) {
      let week = weeks[i];
      week.style.display = 'grid'
    }
  }
  else if (this.selectedIndex === 1) {
    document.querySelector('#week1').style.display = "grid";
    document.querySelector('#week2').style.display = "none";
    document.querySelector('#week3').style.display = "none";
  }
  else if (this.selectedIndex === 2) {
    document.querySelector('#week1').style.display = "none";
    document.querySelector('#week2').style.display = "grid";
    document.querySelector('#week3').style.display = "none";
  }
  else if (this.selectedIndex === 3) {
    document.querySelector('#week1').style.display = "none";
    document.querySelector('#week2').style.display = "none";
    document.querySelector('#week3').style.display = "grid";
  }
});

const weeklyInnerHTML = "<div class = 'Monday' style = 'padding: 10px; border: solid 1px; min-width: 200px;min-height: 100px'></div><div class = 'Tuesday' style = 'padding: 10px; border: solid 1px; min-width: 200px;min-height: 100px'></div><div class = 'Wednesday' style = 'padding: 10px; border: solid 1px; min-width: 200px;min-height: 100px'></div><div class = 'Thursday' style = 'padding: 10px; border: solid 1px; min-width: 200px;min-height: 100px'></div><div class = 'Friday' style = 'padding: 10px; border: solid 1px; min-width: 200px;min-height: 100px'></div>"

const calendarContainer = document.createElement('div');
calendarContainer.setAttribute('style', 'border: solid 2px');
document.body.appendChild(calendarContainer);

const calendarHeader = document.createElement('div');
calendarHeader.setAttribute('class', 'weekContainer');
calendarHeader.setAttribute('id', 'calendarHeader');
calendarHeader.setAttribute("style", "display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr; border: solid 2px;");
calendarHeader.innerHTML = "<div><h1>Monday</h1></div><div><h1>Tuesday</h1></div><div><h1>Wednesday</h1></div><div><h1>Thursday</h1></div><div><h1>Friday</h1></div>"
calendarContainer.appendChild(calendarHeader)


const headerDivs = calendarHeader.getElementsByTagName('div');

for (let i = 0; i < headerDivs.length; i++) {
    let div = headerDivs[i];
    div.setAttribute('style', 'padding: 10px; border: solid 1px; min-width: 198px;')
};

for (let i = 1; i <= 3; i++) {
  const weeklyDiv = document.createElement('div');
  weeklyDiv.setAttribute('id', 'week' + i);
  weeklyDiv.setAttribute('class', 'weekContainer');
  weeklyDiv.innerHTML = weeklyInnerHTML
  weeklyDiv.setAttribute("style", "display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr; ")
  calendarContainer.appendChild(weeklyDiv)
  let daysInWeek = weeklyDiv.getElementsByTagName('div');
  for (let j = 0; j < daysInWeek.length; j++) {
    let day = daysInWeek[j];
    day.addEventListener('dblclick', downloadDivData);
  }
}
for (let i = 0; i < schedule.length; i++) {
  const calItem = schedule[i];
  const week = document.getElementById('week' + calItem['week']);
  const target = week.getElementsByClassName(calItem['day'])
  let pTags = ""; 
  for (let k = 0; k < calItem['goals'].length; k++) {
    pTags += "<p>" + (k+1) + ": " + calItem['goals'][k] + "</p>"
  }

  target[0].innerHTML = "<h3>" + calItem['challenge'] + "</h3>" + pTags
  
}


function downloadDivData() {
    // Get the data from the div
    var data = this.innerHTML
  
    // Create a Blob object containing the data
    var blob = new Blob([data], {type: "text/calendar"});
  
    // Create an object URL for the Blob
    var url = URL.createObjectURL(blob);
  
    // Create a download link
    var link = document.createElement("a");
  
    // Set the href and download attributes of the link
    link.href = url;
    link.download = "calendar.ics";
  
    // Click the link to download the data
    link.click();
  }

// Your schedule can be accessed through the global object "schedule"
console.log(schedule);
