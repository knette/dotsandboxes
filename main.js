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
    init: function() {
        game.currentPlayer = game.players[0]
    },
    switchPlayer: function() {
        if (game.currentPlayer === game.players[0]) {
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
    console.log(game.currentPlayer.name)
    for (i = 1; i < 25; i++) {
        if (($('.box' + i + '.clicked').length === 4) && (game.currentPlayer.name === 'Player 1')){
            if(!$('.hotbox' + i).hasClass('player2won') && !$('.hotbox' + i).hasClass('player1won')) {
              $('.hotbox' + i).addClass('player1won') 
              game.switchPlayer()
            }
            
            //if hotboxi doesnt have a class player2won add class of player1won
        } else if (($('.box' + i + '.clicked').length === 4) && (game.currentPlayer.name === 'Player 2')){
            if(!$('.hotbox' + i).hasClass('player1won') && !$('.hotbox' + i).hasClass('player2won')) {
                $('.hotbox' + i).addClass('player2won') 
                game.switchPlayer() 
              }
        }     
    }
    game.switchPlayer()
    
    $scorePlayer1.text($('.box.player1won').length)
    $scorePlayer2.text($('.box.player2won').length)
}

$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

game.init()