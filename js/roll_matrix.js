function roll_matrix(matrix, width) {
  if ( matrix.length === 1 ) {
    return matrix.shift();
  } else {
    var str = "";

    // first row
    for (var i = 0; i < width; i++) {
      str += matrix.shift() + " ";
    }

    // last column
    width = width - 1;
    for (var i = width; i < matrix.length; i+=width) {
      str += matrix.splice(i, 1) + " ";
    }
    
    // rotate the matrix by reversing the string
    return str + roll_matrix(matrix.reverse(), width); // tail recursion ;)
  }
}
