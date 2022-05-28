// The Math Library
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();

console.log(floor);
//Output prediction = 1
console.log(ceiling);
//Output prediction = 4
console.log(random);
//Output prediction = We cannot accurately predict the variable that will come from Math.random()


// Dice Roller
function d6() {
    var roll = Math.floor((Math.random()*6)+1); // < This is the only code I wrote for this function/problem
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
// Output prediction = We cannot accurately predict the variable that will come from roll because it uses Math.random()


// Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function consult() {
    var i = Math.floor((Math.random()*lifesAnswers.length)+1)
    return lifesAnswers[i]
}

var x = consult()
console.log(x)
// Once again we cannot accurately predict the outcome, I also wrote the function but was provided the array