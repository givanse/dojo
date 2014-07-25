QUnit.test( "matching brackets - Looking For Char", function( assert ) {
  var str = "{";
  assert.ok( ! isMatchLFC(str), str);

  str = "}";
  assert.ok( ! isMatchLFC(str), str);

  str = "{}";
  assert.ok( isMatchLFC(str), str);

  str = "()";
  assert.ok( isMatchLFC(str), str);

  str = "[]";
  assert.ok( isMatchLFC(str), str);

  // 3 * 2 * 1

  // ()
  str = "()[]{}";
  assert.ok( isMatchLFC(str), str);

  str = "(){}[]";
  assert.ok( isMatchLFC(str), str);

  // []
  str = "[](){}";
  assert.ok( isMatchLFC(str), str);

  str = "[]{}()";
  assert.ok( isMatchLFC(str), str);

  // {}
  str = "{}()[]";
  assert.ok( isMatchLFC(str), str);

  str = "{}[]()";
  assert.ok( isMatchLFC(str), str);

  // simple nesting

  // ()
  str = "([{}])";
  assert.ok( isMatchLFC(str), str);

  str = "({[]})";
  assert.ok( isMatchLFC(str), str);

  // []
  str = "[{()}]";
  assert.ok( isMatchLFC(str), str);

  str = "[({})]";
  assert.ok( isMatchLFC(str), str);
 
  // {}
  str = "{[()]}";
  assert.ok( isMatchLFC(str), str);
 
  str = "{([])}";
  assert.ok( isMatchLFC(str), str);

  // dangling

  str = "()[";
  assert.ok( ! isMatchLFC(str), str);

  str = "([)";
  assert.ok( ! isMatchLFC(str), str);

  str = "[()";
  assert.ok( ! isMatchLFC(str), str);

  str = "()]";
  assert.ok( ! isMatchLFC(str), str);

  str = "]()";
  assert.ok( ! isMatchLFC(str), str);

  str = "(])";
  assert.ok( ! isMatchLFC(str), str);

  str = "]()[";
  assert.ok( ! isMatchLFC(str), str);

  str = "[()[";
  assert.ok( ! isMatchLFC(str), str);

  str = "]()]";
  assert.ok( ! isMatchLFC(str), str);

  // mismatch

  str = "(]";
  assert.ok( ! isMatchLFC(str), str);

  str = "(}";
  assert.ok( ! isMatchLFC(str), str);

  str = "[}";
  assert.ok( ! isMatchLFC(str), str);

  str = "[)";
  assert.ok( ! isMatchLFC(str), str);

  str = "{)";
  assert.ok( ! isMatchLFC(str), str);

  str = "{]";
  assert.ok( ! isMatchLFC(str), str);

  // complex
   
  str = "(())()";
  assert.ok( isMatchLFC(str), str);

  str = "(([{}])([])){([{}])([{}])}";
  assert.ok( isMatchLFC(str), str);

});

QUnit.test( "matching brackets - Stack", function( assert ) {
  var str = "{";
  assert.ok( ! isMatchStack(str), str);

  str = "}";
  assert.ok( ! isMatchStack(str), str);

  str = "{}";
  assert.ok( isMatchStack(str), str);

  str = "()";
  assert.ok( isMatchStack(str), str);

  str = "[]";
  assert.ok( isMatchStack(str), str);

  // 3 * 2 * 1

  // ()
  str = "()[]{}";
  assert.ok( isMatchStack(str), str);

  str = "(){}[]";
  assert.ok( isMatchStack(str), str);

  // []
  str = "[](){}";
  assert.ok( isMatchStack(str), str);

  str = "[]{}()";
  assert.ok( isMatchStack(str), str);

  // {}
  str = "{}()[]";
  assert.ok( isMatchStack(str), str);

  str = "{}[]()";
  assert.ok( isMatchStack(str), str);

  // simple nesting

  // ()
  str = "([{}])";
  assert.ok( isMatchStack(str), str);

  str = "({[]})";
  assert.ok( isMatchStack(str), str);

  // []
  str = "[{()}]";
  assert.ok( isMatchStack(str), str);

  str = "[({})]";
  assert.ok( isMatchStack(str), str);
 
  // {}
  str = "{[()]}";
  assert.ok( isMatchStack(str), str);
 
  str = "{([])}";
  assert.ok( isMatchStack(str), str);

  // dangling

  str = "()[";
  assert.ok( ! isMatchStack(str), str);

  str = "([)";
  assert.ok( ! isMatchStack(str), str);

  str = "[()";
  assert.ok( ! isMatchStack(str), str);

  str = "()]";
  assert.ok( ! isMatchStack(str), str);

  str = "]()";
  assert.ok( ! isMatchStack(str), str);

  str = "(])";
  assert.ok( ! isMatchStack(str), str);

  str = "]()[";
  assert.ok( ! isMatchStack(str), str);

  str = "[()[";
  assert.ok( ! isMatchStack(str), str);

  str = "]()]";
  assert.ok( ! isMatchStack(str), str);

  // mismatch

  str = "(]";
  assert.ok( ! isMatchStack(str), str);

  str = "(}";
  assert.ok( ! isMatchStack(str), str);

  str = "[}";
  assert.ok( ! isMatchStack(str), str);

  str = "[)";
  assert.ok( ! isMatchStack(str), str);

  str = "{)";
  assert.ok( ! isMatchStack(str), str);

  str = "{]";
  assert.ok( ! isMatchStack(str), str);

  // complex
   
  str = "(())()";
  assert.ok( isMatchStack(str), str);

  str = "(([{}])([])){([{}])([{}])}";
  assert.ok( isMatchStack(str), str);

});

/*EOF*/
