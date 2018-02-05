var $line =  $('.line')
var $vertLine = $('.vert-line')

//when a line is clicked its color changes
function clickHandler() {
    $(this).css.("background-color","yellow")
}
$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)