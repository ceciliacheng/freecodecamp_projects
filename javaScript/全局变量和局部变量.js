// 无论是全局作用域还是局部作用域里，不用var也可以定义变量,但最好用上var
// 因为global variables declared with var are properties of the  window object.
// 用var声明的全局变量是窗口对象的属性
// 但是我不知道什么是窗口对象
// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
