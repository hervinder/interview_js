function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        // console.log("string", string, '-p----------', string[i]);
        // console.log("String1", string.substring(0, i));
        // console.log("string2", string.substring(i + 1));

        var charsLeft = string.slice(0, i) + string.slice(i + 1)
        // console.log("charsLeft-----------------", charsLeft);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}

var permutation = getAllPermutations("abc");

console.log(permutation)