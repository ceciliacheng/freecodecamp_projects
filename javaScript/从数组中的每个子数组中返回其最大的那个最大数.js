function largestOfFour(arr) {
    // 请把你的代码写在这里
    var results = [];
    for (var n = 0; n < arr.length; n++) {
        var largestNumber = 0;
        for (var sb = 0; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
        }
        results[n] = largestNumber;
    }
    return results;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);