// 用if函数实现递归n!

function factorialize(num) {
    if (num < 0) {
      return -1;
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      return (num * factorialize(num-1));
    }
  }
  
  factorialize(5);
  