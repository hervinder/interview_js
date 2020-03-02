function getPermutation(string) {
    var result = [];
    if (string.length === 1) {
        result.push(string);
        return;
    }

    for (var i = 0; i < string.length; i++) {

        let firstChar = string[i];
        let leftChar = string.slice(0, i) + string.slice(i + 1);

        var innerPermutation = getAllPermutations(leftChar);

        for (var i = 0; i < innerPermutation.length; i++) {

            result.push(firstChar + innerPermutation[i]);
        }

    }

    return result;
}

var per = getAllPermutations("abc");

/*************************************************************** */


function getReverse(words) {

    var arr = words.trim().split(" ");
    var words = '';
    var reverse = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        // reverse.push(arr[i])
        words = words + ' ' + arr[i];
    }
    return words;
    //  console.log(words.trim());
    // console.log(words.concat(reverse).replace(/,/g, ' '));
}

getReverse("Javascript is a good programming language");

/*************************************************************** */



function removeDuplicates(string) {
    var dummy = '';

    for (var i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) != i) {
        }
        else {
            dummy = dummy + string[i];
        }
    }
    return dummy;

}

function reverse(str) {

    if (str.length ==  1) {
        return str[0];
    }
    return reverse(str.slice(1)) + str[0]
}

removeDuplicates("bananas");

/*************************************************************** */


function checkValidShuffle(string) {
    let first = "abc";
    let second = "def";
    let third = "dabecf";
    var flag = true;
    for (var c = 0, a = 0, b = 0; c < third.length; c++) {
        if (third[c] == first[a]) {
            a++
        }
        else if (third[c] == second[b]) {
            b++;
        }
        else {
            console.log("falg", flag);
            flag = false;
            break;
        }
    }

    // console.log("falg", flag);
}


checkValidShuffle();


/*************************************************************** */


function checkStringisSubstring(substr, str) {

    var flag = false;
    var start = '';
    for (var i = 0, j = 0; i < str.length; i++) {
        if (str[i] == substr[j]) {
            if (j == (substr.length - 1)) {
                start = i - j;
                flag = true;
                break;
            }
            j++;
        }
        else {
            j = 0;
        }
    }
    console.log("substr", flag, start);
}

checkStringisSubstring("ABABCABAB", "ABABDABACDABABCABAB");

/*************************************************************** */
function checkOddEquality(str, i) {
    let left = i;
    let right = i;
    while (left >= 0 && right <= str.length - 1 && str[left] == str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}
function checkEvenEquality(str, i) {
    let left = i;
    let right = i + 1;
    while (left >= 0 && right <= str.length - 1 && str[left] == str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}
function getlongestPalindrome(str) {
    let longest = str.substring(0, 1);
    for (var i = 0; i < str.length; i++) {


        var tempEq = checkOddEquality(str, i);
        if (tempEq.length > longest.length) {
            longest = tempEq;
        }
        tempEq = checkEvenEquality(str, i);
        if (tempEq.length > longest.length) {
            longest = tempEq;
        }
    }
    console.log("longest", longest);
}

getlongestPalindrome("bananas");



/*************************************************************** */

function who() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shadows');
        }, 500);
    });
    console.log("end");
}
async function callback() {
    const a = await who();
}
callback();
console.log("next statement");



