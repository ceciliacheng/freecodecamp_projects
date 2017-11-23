function isPalindrome(line) {
    line += "";
    return line === line.split("").reverse().join("");
}

isPalindrome(12321)