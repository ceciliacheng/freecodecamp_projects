## switch语句
> 如果你有非常多的选项需要选择，可以使用switch语句。
> 根据不同的参数值会匹配上不同的**分支**，语句会从第一个匹配的case分支开始执行，直到碰到break就结束。

### 语法和实例
[w3school讲解得最好了](http://www.w3school.com.cn/js/js_switch.asp)

逻辑判断方面，JS有switch 语句，所以当程序里有多个选项供选择时，switch 语句写起来会比多个串联的if/if else语句容易些
 对比下面这段switch代码：
 > function myTest(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "There is no #1";
    break;
    case 42:
      answer = "The Answer";
    break;
    case 99:
      answer = "Missed me by this much!";
    break;
    case 7:
      answer = "Ate Nine";
    break;
    case "bob":
      answer = "Marley";
    break;
    default:
      answer = "";
  }
  	return answer;  
	}
    
和下面这段用if else 写成的代码
> function myTest(val) {
  	var answer = "";
  	if (val === "bob") {
   	 answer = "Marley";
  	} else if (val === 42) {
   	 answer = "The Answer";
 	 } else if (val === 1) {
    	answer = "There is no #1";
  	} else if (val === 99) {
    	answer = "Missed me by this much!";
  	} else if (val === 7) {
    	answer = "Ate Nine";
  	}
		return answer;  
	}
很明显，使用switch语句的代码，**可阅读性**比使用if else语句的代码高很多。




