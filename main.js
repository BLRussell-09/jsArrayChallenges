//  Challenge 1 
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
var challengeThreeInputA = [ 1, 1, 7, 1, 3, 1, 6 ]

var unique = function uniq(arr1) {
  return arr1.filter(function(elem, index, self) {
    return self.indexOf(elem)==self.lastIndexOf(elem);
  });
}

var aNotherDivElement = document.getElementById('challenge-3');
aNotherDivElement.innerHTML = "<h4>" + unique(challengeThreeInputA) + "</h4>"

// Challenge 4

function mapper(arr){
  var dubbedArr = arr.map(x => x * 2);
  return dubbedArr;
}

var array1 = [1,2,3,4,5,6,7,8,9,10]
var dubz = array1.map(x => x * 2);

var divFour = document.getElementById('challenge-4');
divFour.innerHTML = "<h4>" + dubz + "</h4>"

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

var blubook = list.diff(arr)

var divSix = document.getElementById('challenge-6');
divSix.innerHTML = "<h4>" + blubook + "</h4>"

// Challenge 7
var begArr = [1,2,3,4,5];
var beggers = [];
var currentBegger = 0;
var totalBeggers = 3;
for (var idx = 0; idx < begArr.length; idx++){ 
  if (idx < totalBeggers)
  {
    beggers[currentBegger++] = begArr[idx].toString();
  }
  else
  {
    beggers[currentBegger++] += ',' + begArr[idx].toString();
  }
  if (currentBegger === totalBeggers)
  {
    currentBegger = 0;
  }
} 
var answer = '';
for (var idx = 0; idx < beggers.length; idx++) {
  var values = beggers[idx].split(',');
  var total = 0;
  for(var idx2 = 0; idx2 < values.length; idx2++){
    total += parseInt(values[idx2]);
  }
  answer += beggers[idx] + " = " + total.toString() + "<br/>";
  console.log(beggers[idx] + " = " + total.toString());
}
var divSev = document.getElementById('challenge-7');
divSev.innerHTML = "<h4>" + answer + "</h4>"


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
divOcho.innerHTML = "<h4>" + output + "</h4>";

// Challenge 9

function phone(i) {
  if (i.length === 10) {
    return i.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  else 
  {
    return null
  }
}
 var pNumber = [1,2,3,4,5,6,7,8,9,0];
 var newNum = pNumber.join('');
 phoneNumber = phone(newNum);

 var divNine = document.getElementById('challenge-9');
 divNine.innerHTML = "<h4>" + phoneNumber + "</h4>";
 
// Challenge 10

var line1 = "I I I I";
var line2 = " I I I ";
var line3 = "  I I  ";
var line4 = "   I   ";
var debug = "";

var arr = [8,,9,5]

function charSetter(str, index, chr){
  if (index > str.length -1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

for (var idx = 0; idx < arr.length; idx++)
{
  switch(arr[idx])
  {
    case 1:
    line1 = charSetter(line1, 0, ' ')
    break;
    case 2:
    line1 = charSetter(line1, 2, ' ')
    break;
    case 3:
    line1 = charSetter(line1, 4, ' ');
    break;
    case 4:
    line1 = charSetter(line1, 6, ' ')
    break;
    case 5:
    line2 = charSetter(line2, 1, ' ')
    break;
    case 6:
    line2 = charSetter(line2, 3, ' ')
    break;
    case 7:
    line2 = charSetter(line2, 5, ' ')
    break;
    case 8:
    line3 = charSetter(line3, 2, ' ')
    break;
    case 9:
    line3 = charSetter(line3, 4, ' ')
    break;
    case 10:
    line4 = charSetter(line4, 3, ' ')
    break;
  }
}
var results = "<h4>" + debug + "<br/>" + line1 + "<br/>" + line2 + "<br/>" + line3 + "<br/>" + line4 + "<br>" + "</h4>";
var divTen = document.getElementById('challenge-10');
divTen.innerHTML = results.replace(/ /g, "&nbsp;");