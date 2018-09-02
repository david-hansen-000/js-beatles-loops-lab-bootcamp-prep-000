// add solution here
function theBeatlesPlay(musicians, instruments) {
  var musical = new Array(musicians.length);
  for(var i=0; i<musicians.length; i++) {
    emptyArray[i]=musicians[i] + " plays "+ instruments[i];
  }
  return musical;
}

function johnLennonFacts(facts) {
  for (var i=0; i<facts.length; i++) {
    facts[i] = facts[i]+"!!!";
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var array=[];
  do {
    array.push("I Love the Beatles!");
    num++;
  } while(num<15);
  return array;
}