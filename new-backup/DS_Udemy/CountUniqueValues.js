function countUnique(arr) {

    if (arr.length === 1) {
        return arr[0];
    }


    var unique = {};

    for (var i = 0; i < arr.length; i++) {

        if (!unique[arr[i]]) {
            unique[arr[i]] = 1;
        }

    }
    return unique;

}

countUnique([1, 1, 1, 1, 3]);
