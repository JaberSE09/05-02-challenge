

//when document is ready runs the code
$(document).ready(function () {

  //sets the date to the current day
  var date = moment().format('dddd');
  $("#currentDay").text(date)

 

    
  
  //goes through the day 9AM to 5PM
  //sets up the buttons and text boxes
    for (let i = 9; i < 18; i++) { 
    var row = ""
    row = $('<div class= "row">')
    colHour = $(`<div class ="col-lg-2 hour">${AmOrPm(i)}</div>`)
    colInput = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
    colBtn = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
    row.append(colHour)
    row.append(colInput)
    row.append(colBtn)
    $("#planner").append(row)
    //updates the color based on the time of day
    updateColor()
    //gets the saved data
    getLocalStorage(i)
  }




  //gets the local storage and puts the input into the input box
  function getLocalStorage(hour) {
    let getInput = localStorage.getItem(hour)
    console.log(getInput)
    var input = $(`#inputText${hour}`).val(getInput)
  }
  //  Convert Am to Pm
  function AmOrPm(hour) {
    var time = ""
    if (hour <= 12) {
      time = "AM"
    } else {
      time = "PM"
    }
    hour = hour % 12
    hour = hour ? hour : 12
    return hour + " " + time
  }
}
);


//updates the color based on the time of day
function updateColor() {
  var hour = new Date().getHours();
  for (var i = 9; i < 18; i++) {
    if (hour == i) {
      $(`#inputText${i}`).css("background", "red")
    } else if (hour < i) {

      $(`#inputText${i}`).css("background", "lightblue")

    }
  }

//when the button is clicked it saves the data
$(".btn").click(function(){
  var id = $(this).data("id")
  var input = $(this).parent().siblings().find("input").val()
localStorage.setItem(id,input)
})

}

//updates the color every second
setInterval(updateColor(), 1000)

