var $line =  $('.line')
var $vertLine = $('.vert-line')
var $box1 = $('.box1') 
var $scorePlayer1 = $('#score-player1')
var $scorePlayer2 = $('#score-player2')
var playersTurn = $('#players-turn')
var winnersText = $('.players-turn-text')

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
    },
    checkWinner: function() {
        if ($('.clicked').length === 60) {
            if ((parseInt($scorePlayer1.text())) > (parseInt($scorePlayer2.text()))) {
           winnersText.text("Winner: Player 1")
           winnersText.addClass('game-over')
           $('.modal, .modal-end').css({"display": "block"}) 
            }
            else if ((parseInt($scorePlayer1.text())) === (parseInt($scorePlayer2.text()))) {
                if (game.currentPlayer === game.players[0]) {
                    winnersText.text("Winner: Player 2")
                    winnersText.addClass('game-over')
                    $('.modal, .modal-end').css({"display": "block"}) 
                } else { winnersText.text("Winner: Player 1") 
                         winnersText.addClass('game-over')}
                         $('.modal, .modal-end').css({"display": "block"}) 
            }
            else { winnersText.text("Game Over! Winner: Player 2")
                   winnersText.addClass('game-over')
                   $('.modal, .modal-end').css({"display": "block"}) 
                }
        }
}
}
//On each click of a line, change the color and the player
    //unless the player wins the box. If the player wins the
    //box update the inside of the box to their color. 
function clickHandler() {
    $(this).addClass('clicked')
    $(this).addClass('no-hover')
    console.log(game.currentPlayer.name)
    //variable that counts number of classes for the boxes players have won 
    var p1Boxes = $('.player1won').length
    var p2Boxes = $('.player2won').length
    console.log(p2Boxes)
    for (i = 1; i < 26; i++) {
        if (($('.box' + i + '.clicked').length === 4) && (game.currentPlayer.name === 'Player 1')){
            if(!$('.hotbox' + i).hasClass('player2won') && !$('.hotbox' + i).hasClass('player1won')) {
              $('.hotbox' + i).addClass('player1won') 
            }
            
        } else if (($('.box' + i + '.clicked').length === 4) && (game.currentPlayer.name === 'Player 2')){
            if(!$('.hotbox' + i).hasClass('player1won') && !$('.hotbox' + i).hasClass('player2won')) {
                $('.hotbox' + i).addClass('player2won') 
              }
        }    
    }

    console.log(p1Boxes === $('.player1won').length)
    console.log(p2Boxes === $('.player2won').length)
    if (p1Boxes === $('.player1won').length && p2Boxes === $('.player2won').length ) {
        game.switchPlayer()
    }
    game.checkWinner()
    $scorePlayer1.text($('.box.player1won').length)
    $scorePlayer2.text($('.box.player2won').length)
}

$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

game.init()


$('.modal').on('click', function() {
    $('.modal').css("display", "none")
})
