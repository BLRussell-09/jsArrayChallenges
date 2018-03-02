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

// Challenge 4

var array1 = [1,2,3,4,5,6,7,8,9,10]
var dubz = array1.map(x => x * 2);

var divSix = document.getElementById('challenge-4');
divSix.innerHTML = "<h4>" + dubz + "</h4>"

// Challenge 5

var arr1 = [1,2];
var arr2 = [1];

Array.prototype.diff = function (a) {
  return this.filter(function (i) {
      return a.indexOf(i) === -1;
  });
};

var divFive = document.getElementById('challenge-5');
divFive.innerHTML = "<h4>" + arr1.diff(arr2) + "</h4>"

// Challenge 6

var arr = [1,2,3,4,6,7,8,10];
var lowEnd = Math.min.apply(null, arr);
var highEnd = Math.max.apply(null, arr);
var list = [];

for (var i = lowEnd; i <= highEnd; i++) {
  list.push(i);
}



var divSix = document.getElementById('challenge-6');
divSix.innerHTML = "<h4>" + list.diff(arr) + "</h4>"

// Challenge 7
var begArr = [1,2,3,4,5]
var beg1 = []
var beg2 = []
for (var idx = 0; idx < begArr.length; idx++)
{
  if (begArr[idx] % 2 === 0)
  {
    beg1.push(begArr[idx]);
  } 
  else
  {
    beg2.push(begArr[idx]);
  }
}

// Challenge 8

var test = 23434567; 
var testSplat = test.toString();
var output = '';
for (var idx = 0; idx < testSplat.length; idx++) {
  if (idx === 0 )
  {
    output = testSplat[idx]
  }
  else
  {
    output += "-" + testSplat[idx];
  }
}

var divOcho = document.getElementById('challenge-8');
divSix.innerHTML = "<h4>" + output + "</h4>"
