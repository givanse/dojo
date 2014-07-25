/* 
  LFC is much much slower than Stack
  http://jsperf.com/match-brackets
*/

/*
  Take a char, look for its closing counterpart and remove it from the array.
  Repeat until the array is empty.
  If the closing char is at an odd posiiton, return false.
*/
function isMatchLFC(str) {

  str = str.split("");

  function getLookingFor(ch) {
    switch (ch) {
      case '(':
        return ')';
      case '[':
        return ']';
      case '{':
        return '}';
      default:
        return null;
    }
  }

  for (var i = 0; i < str.length; i++) {
    var a = str.shift();

    if ( str.length < 1) {
      return false;
    }

    var lookForCh = getLookingFor( a );
    for (var j = 0; j < str.length; j++) {
      var b = str[j];
      if ( b === lookForCh && j % 2 === 0) {
        i--;
        str.splice(j, 1);
        break;
      } else if ( j === str.length - 1 ) {
        return false;
      }
    }
  }

  return true;
}

/*
 Iterate through the string
 If an opening char is found, push it to the stack
 If a closing char is found, pop one from the stack and check if they match
 */
function isMatchStack(str) {
  function isChOpening(ch) {
    return ch === '(' ||  ch === '[' || ch === '{';
  }
  function isDuoClosed(duo) {
    return duo === '()' ||  duo === '[]' || duo === '{}';
  }

  var stack = [];
  for (var i = 0; i < str.length; i++) {
    var a = str[i];
    if ( isChOpening(a) ) {
      stack.push(a);
    } else {
      var closing = a;
      var opening = stack.pop();
      if ( ! isDuoClosed(opening + closing) ) {
        return false;
      }
    }
  }

  if ( stack.length > 0 ) {
    return false;
  }

  return true;
}

/*EOF*/
