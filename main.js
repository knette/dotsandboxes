var $line =  $('.line')
var $vertLine = $('.vert-line')
var $box1 = $('.box1') 

//when a line is clicked its color changes
function clickHandler() {
    $(this).css("background-color","red")
    if ($box1.css('background-color') != "rgb(255, 221, 206)") {
        $('.hotbox1').css('background-color', 'blue')
        //update above to players color. 
        //score +1 
}
$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

//if all 4 sides of box1 are not the color they started as
//update inside box color to players color


}