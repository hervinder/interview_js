// Naive approach time comaplexity   o(n^2)  finding maximum subArray sum

function maxSum(arr, n) {

    var max = 0;

    for (var i = 0; i < (arr.length - n + 1); i++) {
        var temp = 0;

        for (var j = i; j < n + i; j++) {

            temp = temp + arr[j];

        }
        if (temp > max) {
            max = temp;

        }



    }
    return max;

}


maxSum([1, 2, 3, 4, 5, 7], 3);

// Side Window Pattern approach time comaplexity   o(n)  finding maximum subArray sum
function maxSum(arr, n) {
    var max = 0;
    var temp = 0;


    for (let i = 0; i < n; i++) {

        max = max + arr[i];

    }

    for (var j = 1; j < arr.length; j++) {

        temp = max - arr[j - 1] + arr[j + n - 1];
        if (temp > max) {
            max = temp;
        }

    }

    return max;


}


maxSum([1, 2, 3, 4, 5, 7], 3)



