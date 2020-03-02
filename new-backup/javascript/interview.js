class lazyArr {
    dInstance = undefined;
    arr = [];
    constructor(arr) {
        this.arr += arr;
    }


    double(fn) {

        // let map = this.arr.map(fn);

        // return map;


        this.dInstance = new lazyArr();

        this.arr = this.arr.map(fn);

        return this.dInstance;
    }

    elements() {
        return this.arr;
    }
}


let l = new lazyArr([2, 3, 4]);
let double = l.double((x) => { x * x });


// l.elements() [2,3,4]
// double.elements() [4,9,16]

console.log("elements", l.elements());
console.log("elements", double.elements());