$(document).ready(function(){
    var date= moment().format('dddd');
    $("#currentDay").text(date)

    var row =""

    for (let i = 9; i < 18 ; i++) {
        row = $('<div class= "row">')
        colHour = $(`<div class ="col-lg-2 hour">${AmOrPm(i)}</div>`)
        colInput = $(`<div class ="col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text" name="userInput"></div>`)
        colBtn = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
        row.append(colHour)
        row.append(colInput)
        row.append(colBtn)
        $("#planner").append(row)

    }









//  Convert Am to Pm
function AmOrPm(hour){
    var time=""
    if(hour<=12){
      time= "AM"
    }else{
      time="PM"
    }
    hour = hour % 12
    hour = hour ? hour : 12
    return hour + " " + time
  }
}
);

