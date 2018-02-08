var $line =  $('.line')
var $vertLine = $('.vert-line')
var $box1 = $('.box1') 
var $scorePlayer1 = $('#score-player1')
var $scorePlayer2 = $('#score-player2')
var playersTurn = $('#players-turn')
var winnersText = $('.players-turn-text')

function player1Wins() {
    winnersText.text("Winner: Player 1")                                         // text updated to player 1
    winnersText.addClass('game-over')                                            // class added to update CSS
    $('.modal, .modal-end').css({"display": "block"})                            // show modal 
}
function player2Wins() {
    winnersText.text("Winner: Player 2")
    winnersText.addClass('game-over')
    $('.modal, .modal-end').css({"display": "block"}) 
}

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
        if ($('.clicked').length === 5) {                                              //when all lines are clicked run, check and show winner
            if ((parseInt($scorePlayer1.text())) > (parseInt($scorePlayer2.text()))) { //when player 1 score is higher player 1 wins
                player1Wins()
            }
            else if ((parseInt($scorePlayer1.text())) === (parseInt($scorePlayer2.text()))) {
                if (game.currentPlayer === game.players[0]) {
                    player2Wins()
                } 
                else { 
                        player1Wins()
                        }
            }
            else {
                    player2Wins()
                }
        }
    }
}

function clickHandler() {
    $(this).addClass('clicked no-hover') // when line is clicked take away over and change color 
    var p1Boxes = $('.player1won').length  //variable for each player to keep number of boxes already won 
    var p2Boxes = $('.player2won').length  
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
    if (p1Boxes === $('.player1won').length && p2Boxes === $('.player2won').length ) {  //switch player when clicked and when  
        game.switchPlayer()                                                          // neither player has finished a box. 
    }                                                                            // when they finish a box do not switch player
    game.checkWinner()                                                             //check for winner every time a line is clicked
    $scorePlayer1.text($('.box.player1won').length)
    $scorePlayer2.text($('.box.player2won').length)
}

$line.on('click', clickHandler)
$vertLine.on('click', clickHandler)

game.init()

$('.modal').on('click', function() {
    $('.modal').css("display", "none")
})