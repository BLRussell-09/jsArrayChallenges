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


//  Challenge 2
var threeInputA = [1,2,3,4,5,6,7,8,9];
var inputAjoin = threeInputA.join('');

var blalala = function padawan(switcher) {
  return switcher.map(x => parseInt(x.toString().replace(/3/g, '~').replace(/7/g, '3').replace(/~/g, '7')));
  
};

var notherDivElement = document.getElementById('challenge-2');
notherDivElement.innerHTML = "<h4>" + blalala(threeInputA) + "</h4>"

// Challenge 3 
var challengeThreeInputA = [ 1, 5, 7, 2, 5, 1 ]

var unique = function uniq(arr1) {
  return arr1.filter(function(elem, index, self) {
    return self.indexOf(elem)==self.lastIndexOf(elem);
  });
}

var aNotherDivElement = document.getElementById('challenge-3');
aNotherDivElement.innerHTML = "<h4>" + unique(challengeThreeInputA) + "</h4>"