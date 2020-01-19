//function currying

function sum(x) {

    return function (y) {
        if (y === undefined) {
            return x;
        }
        else {
            return sum(x + y)
        }


    }


}


sum(1)(2)()





function sum(x) {

    return function (y) {

        if (y === undefined) {
            return y;
        }
        else {
            return sum(x + y);
        }
    }
}