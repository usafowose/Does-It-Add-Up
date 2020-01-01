var targetNumber = Math.floor(Math.random() * 50) + 100;
var $targetNumberDiv = $('.target-number');
$targetNumberDiv.text(targetNumber);

var userScore = 0;
var $userScoreDiv = $('.user-score');

var $azuriteButton = $('.azurite-click');
var $flouriteButton = $('.flourite-click');
var $quartzButton = $('.quartz-click');
var $topazButton = $('.topaz-click');

var randValOne = Math.floor(Math.random() * 25) + 1;
var randValTwo = Math.floor(Math.random() * 25) + 1;
var randValThree = Math.floor(Math.random() * 25) + 1;
var randValFour = Math.floor(Math.random() * 25) + 1;
var randValFive = Math.floor(Math.random() * 25) + 1;
var randValSix = Math.floor(Math.random() * 25) + 1;
var randValSeven = Math.floor(Math.random() * 25) + 1;
var randValEight = Math.floor(Math.random() * 25) + 1;
var randValNine = Math.floor(Math.random() * 25) + 1;
var randValTen = Math.floor(Math.random() * 25) + 1;
var randValEleven = Math.floor(Math.random() * 25) + 1;
var randValTwelve = Math.floor(Math.random() * 25) + 1;
var randValThirteen = Math.floor(Math.random() * 25) + 1;
var randValFourteen = Math.floor(Math.random() * 25) + 1;
var randValFifteen = Math.floor(Math.random() * 25) + 1;
var randValSixteen = Math.floor(Math.random() * 25) + 1;
var randValSeventeen = Math.floor(Math.random() * 25) + 1;
var randValEighteen = Math.floor(Math.random() * 25) + 1;
var randValNineteen = Math.floor(Math.random() * 25) + 1;
var randValTwenty = Math.floor(Math.random() * 25) + 1;
var randValTwentyOne = Math.floor(Math.random() * 25) + 1;
var randValTwentyTwo = Math.floor(Math.random() * 25) + 1;
var randValTwentyThree = Math.floor(Math.random() * 25) + 1;
var randValTwentyFour = Math.floor(Math.random() * 25) + 1;
var randValTwentyFive = Math.floor(Math.random() * 25) + 1;


var buttonVals = [1, randValOne, randValTwo, randValThree, randValFour, randValFive, randValSix, randValSeven, randValEight, randValNine, randValTen, randValEleven, randValTwelve, randValThirteen, randValFourteen, randValFifteen, randValSixteen, randValSeventeen, randValEighteen, randValNineteen, randValTwenty, randValTwentyOne, randValTwentyTwo, randValTwentyThree, randValTwentyFour, randValTwentyFive];

console.log(buttonVals);

var randButtnVal1 = Math.floor(Math.random() * 25);
var randButtnVal2 = Math.floor(Math.random() * 25);
var randButtnVal3 = Math.floor(Math.random() * 25);
var randButtnVal4 = Math.floor(Math.random() * 25);

// console.log(`1: ${randButtnVal1} \n 2: ${randButtnVal2} \n 3: ${randButtnVal3} \n 4: ${randButtnVal4}`);

var assignVals = () => {
    $azuriteButton.attr('value', buttonVals[randButtnVal1]);
    $flouriteButton.attr('value', buttonVals[randButtnVal2]);
    $quartzButton.attr('value', buttonVals[randButtnVal3]);
    $topazButton.attr('value', buttonVals[randButtnVal4]);
};

assignVals();

console.log($azuriteButton.attr('value'));
console.log($flouriteButton.attr('value'));
console.log($quartzButton.attr('value'));
console.log($topazButton.attr('value'));

var buttonAttr = [$azuriteButton.attr('value'), $flouriteButton.attr('value'), $quartzButton.attr('value'), $topazButton.attr('value')];

for (var i = 0; i < buttonAttr.length; i++) {
    console.log(buttonAttr[i]);
    if (parseFloat(buttonAttr[i]) !== 1) {
        var whosNumberOne = Math.floor(Math.random() * 4);
        buttonAttr[whosNumberOne] = 1;

    }
};

$azuriteButton.on('click', () => {
    console.log($azuriteButton.attr('value'));
    userScore += parseFloat($azuriteButton.attr('value'));
    console.log(userScore);
    $userScoreDiv.text(userScore);
});

$flouriteButton.on('click', () => {
    userScore += parseFloat($flouriteButton.attr('value'));
    $userScoreDiv.text(userScore);
});

$quartzButton.on('click', () => {
    userScore += parseFloat($quartzButton.attr('value'));
    $userScoreDiv.text(userScore);
});

$topazButton.on('click', () => {
    userScore += parseFloat($topazButton.attr('value'));
    $userScoreDiv.text(userScore);
}); 