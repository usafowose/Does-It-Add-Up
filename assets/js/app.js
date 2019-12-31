var targetNumber = Math.floor(Math.random() * 100) + 25;
var $targetNumberDiv = $('.target-number');
$targetNumberDiv.text(targetNumber);

var userScore = 0;
var $userScoreDiv = $('.user-score');

var $azuriteButton = $('.azurite-click');
var $flouriteButton = $('.flourite-click');
var $quartzButton = $('.quartz-click');
var $topazButton = $('.topaz-click');

var randValOne = Math.floor(Math.random() * 25);
var randValTwo = Math.floor(Math.random() * 25);
var randValThree = Math.floor(Math.random() * 25);

var buttonVals = [1, randValOne, randValTwo, randValThree];
randButtnVal = Math.floor(Math.random() * 4);

var assignVals = () => {
    $azuriteButton.attr('value', buttonVals[randButtnVal]);
    $flouriteButton.attr('value', buttonVals[randButtnVal]);
    $quartzButton.attr('value', buttonVals[randButtnVal]);
    $topazButton.attr('value', buttonVals[randButtnVal]);
};

assignVals();

    
var addAzurite = () => {
    console.log($azuriteButton.attr('value'));
    userScore += parseFloat($azuriteButton.attr('value'));
    console.log(userScore);
    $userScoreDiv.text(userScore);
}; 

$azuriteButton.on('click', addAzurite); 
