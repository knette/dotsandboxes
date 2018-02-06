var $line =  $('.line')
var $vertLine = $('.vert-line')
var $box1 = $('.box1') 
var $score = $('#score-player1')
var playersTurn = $('#players-turn').text()
//update above to players score instead of player 1.
var game = {
    players: [{name: 'Player 1'}, {name: 'Player 2'}],
    currentPlayer: null,
    winner: false,
    init: function() {
        console.log('game begins')
        game.currentPlayer = game.players[0]
    },
    switchPlayer: function() {
        if (game.currentPlayer === game.players[0]) {
            //if score increases player stays the same
            game.currentPlayer = game.players[1]
            playersTurn = game.players[1]
        } else {
            game.currentPlayer = game.players[0]
            playersTurn = game.players[0]
        }
        playersTurn = game.currentPlayer
    }
}

//when a line is clicked its color changes
//if all 4 sides of box1 are not the color they started as
//update inside box color to players color
function clickHandler() {
    $(this).addClass('clicked')
    if ($('.box1.clicked').length === 4) {
        $('.hotbox1').css('background-color', 'blue')
        $score.text(parseInt($score.text()) + 1)
        game.switchPlayer()
    }
}
$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

game.init()