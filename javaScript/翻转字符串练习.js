// FCC题目要求：
// 先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。

function reverseString(str) {
    // 请把你的代码写在这里
    str_split = str.split('');
    str_rev = str_split.reverse();
    str_join = str_rev.join('');
    return str_join;
  }
  
  reverseString("hello");