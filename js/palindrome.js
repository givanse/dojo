function isPalindrome(str) {
  if ( ! str || str.length < 2 ) {
    return false;
  }

  var half = (str.length / 2 >> 0);
  var i = null;
  var j = null; 

  if ( str.length % 2 === 0 ) {
    i = half - 1;
    j = half;
  } else {
    i = half - 1;
    j = half + 1;
  }

  while ( i >=0 ) {
    if (str[i] !== str[j]) {
      return false;
    }
    i--;
    j++;
  }

  return true;
}
