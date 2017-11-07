### 全局变量和局部变量
    - JS和PY有点类似，函数外的变量是全局变量，函数内的变量是局部变量。可是也有<strong>不同点</strong>——如果函数里的变量，不用<strong>var</strong>命令声明，实际上声明了一个局部变量。

    > "一个程序中有可能具有相同名称的 局部 变量 和 全局 变量。在这种情况下，局部 变量将会优先于 全局 变量。"

### 数据结构
    py清晰地以不用符号划分数据结构，各种数据结构之间，也有清晰的方法调用。
      可是JS就不同了。
    - 数组
        在JS里，数组是以[]表示，跟Python不一样，Py里数组是（）结构。
    - 列表
        在JS里，不是用[]表示
        例题：
            > 写一个函数 queue ，用一个数组arr和一个数字item作为参数。数字item添加到数组的结尾，然后移出数组的第一个元素，最后队列函数应该返回被删除的元素。
            >> function queue(arr, item) {
                arr.push(item);
                return arr.shift();  // 请修改这一行
                }

                // 初始化测试数据
                var testArr = [1,2,3,4,5];

                // 控制台输出
                console.log("Before: " + JSON.stringify(testArr));
                console.log(queue(testArr, 6)); // 你可以修改这一行来测试你的代码
                console.log("After: " + JSON.stringify(testArr));