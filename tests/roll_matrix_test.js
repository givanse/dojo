QUnit.test("roll matrix", function( assert ) {

  var matrix = [1];
  var actual = roll_matrix(matrix, 1);
  var expected = "1";
  assert.equal(actual, expected, "1x1 = " + expected);

  matrix = [1, 2, 
                3, 4];
  actual = roll_matrix(matrix, 2);
  expected = "1 2 4 3";
  assert.equal(actual, expected, "2x2 = " + expected);

  matrix = [1, 2, 3,
            4, 5, 6,
            7, 8, 9];
  actual = roll_matrix(matrix, 3);
  expected = "1 2 3 6 9 8 7 4 5";
  assert.equal(actual, expected, "3x3 = " + expected);

  matrix = [ 1,  2,  3,  4,
             5,  6,  7,  8,
             9, 10, 11, 12, 
            13, 14, 15, 16];
  actual = roll_matrix(matrix, 4);
  expected = "1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10";
  assert.equal(actual, expected, "4x4 = " + expected);

  matrix = [ 1,  2,  3,  4, 5,
             6,  7,  8,  9, 10, 
            11, 12, 13, 14, 15,
            16, 17, 18, 19, 20,
            21, 22, 23, 24, 25];
  actual = roll_matrix(matrix, 5);
  expected = "1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 6 7 8 9 14 19 18 17 12 13";
  assert.equal(actual, expected, "5x5 = " + expected);

  matrix = [ 1,  2,  3,  4,  5,  6,  7,
             8,  9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21,
            22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42,
            43, 44, 45, 46, 47, 48, 49];
  actual = roll_matrix(matrix, 7);
  expected = "1 2 3 4 5 6 7 14 21 28 35 42 49 48 47 46 45 44 43 36 29 22 15 8 9 10 11 12 13 20 27 34 41 40 39 38 37 30 23 16 17 18 19 26 33 32 31 24 25";
  assert.equal(actual, expected, "7x7 = " + expected);
});

/*EOF*/
