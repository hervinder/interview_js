var itemsObj = {};

function subscribe(item, listner) {

    if (!itemsObj.hasOwnProperty(item)) {
        itemsObj[item] = [];
    }

    itemsObj[item].push(listner);

}

function unubscribe(item) {
    delete itemsObj[item];
}

function publish(item, params) {


    if (!itemsObj.hasOwnProperty(item)) {
        return;
    }

    var func = itemsObj[item][0];
    func(params);

}

subscribe("POP", function (params) {

    console.log("HI", params);

})
publish("POP", { name: "harry" });