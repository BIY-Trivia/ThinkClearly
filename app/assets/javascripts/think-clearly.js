var Question = function(imageFilepath, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3){
	this.imageFilepath = imageFilepath;
	this.correctAnswer = correctAnswer;
	this.wrongAnswer1 = wrongAnswer1;
	this.wrongAnswer2 = wrongAnswer2;
	this.wrongAnswer3 = wrongAnswer3;
};

var imageBlurIntervalID;

function StartNewQuestion(){
	// select a question
	var selectedQuestion = new Question('start-screen-swap.jpg', 'Will and Kate', 'Barack and Michelle Obama', 'Kim and Kanye', 'Victoria and David Beckham');

	// Image should appear and the image src should be the imageFilepath property of selectedQuestion - Ayla

	// Blurry-percentage indicator should appear and should be reset to 100% - Claudia
	$('#blurry-percentage').show("slow", function(){
        //indicator appears
        $(this).text("100% blurry");
    });

	// Multiple-choice options should appear and the answers should be set to the possible answers of selectedQuestion - Gabriel
var answersArray = [selectedQuestion.correctAnswer, selectedQuestion.wrongAnswer1,selectedQuestion.wrongAnswer3,selectedQuestion.wrongAnswer2];
    shuffle(answersArray);
     $('#multiple-choice-options button:nth-child(1)').text(answersArray[0]);
     $('#multiple-choice-options button:nth-child(2)').text(answersArray[1]);
     $('#multiple-choice-options button:nth-child(3)').text(answersArray[2]);
     $('#multiple-choice-options button:nth-child(4)').text(answersArray[3]);
     $( "#multiple-choice-options" ).fadeIn( "slow", function() {
      });


	// Have the image start getting clearer over time - Neel
	  $('#box').redraw();
		var i = 100;
		var changeColor = function() {
		  $('#box').css('filter', 'blur(' - i - ')');
		  if (i <= 0) {
			i = 100;
		  } else {
			i += -1;
		  }
		}

		setInterval(changeColor, 100);

}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$(function(){

	$('#play-button').click(function(){
		$('#play-button').hide();
		StartNewQuestion();
	});

});
