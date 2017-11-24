function findLongestWord(str) {
  // 请把你的代码写在这里
  var array = str.split(" ");
  var longest = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}

findLongestWord("May the force be with you");
