// FCC题目要求：
// 先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。

function reverseString(str) {
    // 请把你的代码写在这里
    str_split = str.split(''); //把字符串转化成数组
    str_rev = str_split.reverse();//把数组翻转
    str_join = str_rev.join('');//把数组转化成字符串输出，一开始没加''，返回默认“，”
    return str_join;
  }
  
  reverseString("hello");