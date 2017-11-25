function titleCase(str) {
  // 请把你的代码写在这里
    var convertToArray = str.toLowerCase().split(" ");

    for(var i = 0;i < convertToArray.length;i++){
        var char = convertToArray[i].charAt(0); // 提取第一个单词的首字母
        convertToArray[i]=convertToArray[i].replace(char,function replace(char){
            return char.toUpperCase();
             });
    }
  return convertToArray.join(" ");
}

titleCase("I'm a little tea pot");
