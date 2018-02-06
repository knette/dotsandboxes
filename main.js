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
//On each click of a line, change the color and the player
//unless the player wins the box. If the player wins the
//box update the inside of the box to their color. 
//++update inside box color to players color
function clickHandler() {
    $(this).addClass('clicked')
    for (i = 1; i < 26; i++) {
        if ($('.box' + i + '.clicked').length === 4){
            $('.hotbox' + i).addClass('player1won')
        } else (game.switchPlayer())
    }
    $scorePlayer1.text($('.box.player1won').length)
    $scorePlayer2.text($('.box.player2won').length)
}

$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

game.init()