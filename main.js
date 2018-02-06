var $line =  $('.line')
var $vertLine = $('.vert-line')
var $box1 = $('.box1') 
var $scorePlayer1 = $('#score-player1')
var $scorePlayer2 = $('#score-player2')
var playersTurn = $('#players-turn')
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
            playersTurn.text(game.currentPlayer.name)
        } else {
            game.currentPlayer = game.players[0]
            playersTurn.text(game.currentPlayer.name)
        }
    }
}

//when a line is clicked its color changes
//if all 4 sides of box1 are not the color they started as
//update inside box color to players color
function clickHandler() {
    $(this).addClass('clicked')
    game.switchPlayer()
    //+remove hover
    if ($('.box1.clicked').length === 4) { //+if number of blue boxes = 1 score is 1
        $('.hotbox1').addClass('player1won')
        //$score.text(parseInt($score.text()) + 1)
        $scorePlayer1.text($('.box.player1won').length)
    }
}
$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

game.init()