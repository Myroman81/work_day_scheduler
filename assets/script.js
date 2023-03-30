// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Display today's day and date

//var todayDate = lead().format('dddd, MMM, YYYY');
//$("#currentDay").html(todayDate);

//$(document).ready(function() {

    // set an element
    //$("#date").val( moment().format('MMM D, YYYY') );

    // set a variable
    //var today = moment().format('MMM DD, YYYY');

//});
var today = new Date();
var now = dayjs();
console.log("Date: ", today);
console.log("Day Date: ", now.format('dddd MMM DD h:mm'));
document.getElementById('currentDay').textContent = now.format('dddd MMM h:mm a');


$(document).ready(function () {
    // saveBtn click listener 
    // document.querySelectorAll('.saveBtn')
    $(".saveBtn").on("click", function () {
        console.log("This: ", $(this))
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();   // --> User input "bingo"
        var time = $(this).parent().attr("id");  // --> "hour-8"

        // Save text in local storage
        //                   KEY   VALUE
        localStorage.setItem(time, text);

        // .getItem(*key*);
        // .setItem(*key*, VALUE);
        // .clear()  .removeItem()
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = dayjs().hour();
        //console.log("Current Hour: ", timeNow);

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);  // --> ["hour", 8]  
            //console.log("Block: ", blockTime);
            
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    var tenAM = localStorage.getItem('hour-10');
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    console.log("Saved Data: ", tenAM);

    

    timeTracker();
})









    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
