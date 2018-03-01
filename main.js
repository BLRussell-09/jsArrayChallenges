 var wrd = "jumbo a";

  var wrdSplat = wrd.split(' ');
// var secWord = wrdSplit[1].split('');

function wordScore(string) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // var wrdSplit =  string.split(' ');
  var letterScore = 0;
  var score = 0;
  var firstWord;
  for (i=0; i < string.length; i++) {
    firstWord = string.split('');
    letterScore = alphabet.indexOf(string[i])+1;
    score += letterScore;
  }
  return score;
};
// console.log(letterScore);
//  console.log(wordScore('jumbo'));
 var highScore; 
 if (wordScore(wrdSplat[0]) >= wordScore(wrdSplat[1])){
   highScore = wrdSplat[0]
 } else {
   highScore = wrdSplat[1]
 };

 var divElement = document.getElementById('challenge-1')
 divElement.innerHTML = "<h4>" + highScore + "</h4>";