QUnit.test( "validate palindrome", function( assert ) {

  // not valid

  var str = "";
  assert.ok( !isPalindrome(str), "empty string");

  str = "a";
  assert.ok( !isPalindrome(str), str);

  str = "ab";
  assert.ok( !isPalindrome(str), str);

  str = "abc";
  assert.ok( !isPalindrome(str), str);

  str = "abcd";
  assert.ok( !isPalindrome(str), str);
 
  str = "abca";
  assert.ok( !isPalindrome(str), str);

  str = "abbd";
  assert.ok( !isPalindrome(str), str);

  str = "abcbd";
  assert.ok( !isPalindrome(str), str);

  // valid

  str = "aa";
  assert.ok( isPalindrome(str), str);

  str = "aba";
  assert.ok( isPalindrome(str), str);

  str = "abba";
  assert.ok( isPalindrome(str), str);

  str = "abcba";
  assert.ok( isPalindrome(str), str);

  str = "abcba";
  assert.ok( isPalindrome(str), str);

  str = "tattarrattat";
  assert.ok( isPalindrome(str), str);

  str = "detartrated";
  assert.ok( isPalindrome(str), str);

});
