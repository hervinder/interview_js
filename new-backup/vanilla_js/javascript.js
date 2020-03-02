let countries = [
    {
        name: "India"
    }, {
        name: "In"
    }, {
        name: "America"
    }, {
        name: "Africa"
    }, {
        name: "Bangladesh"
    }, {
        name: "Mynamar"
    }, {
        name: "Nepal"
    },
]

function list(filterCountry) {

    let list = `<div>
         ${filterCountry.map((list) => {
        return (`<li>${list.name} </li>`)
    }).join("\n ")}
    
    </div>`;

    let listparent = document.getElementById("autocomplete");
    listparent.innerHTML = list;

    // console.log(list);

}

function debounce(fn, wait) {
    let timer = "";
    return function (...arg) {
        let clearDeb = function deb() {
            fn.apply(this, [...arg]);
        }
        clearInterval(timer);
        timer = setTimeout(clearDeb, wait);

    }
}
function searchListing(input) {
    var newCountry = countries.filter(function (country) {

        if (country.name.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
            return country.name
        }

    })

    list(newCountry);
}

let apiCall = async (input) => {

    let options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        let response = await fetch("https://swapi.co/api/people/?search=" + input + "", options);
        const json = await response.json();

        // console.log("json", json);
        list(json.results);


    }
    catch{

    }




}
document.addEventListener("input", function (e) {

    let input = e.target.value;

    let debouncing = debounce(() => {
        // apiCall(input);
        searchListing(input)
        console.log("deeee")
    }, 700);
    debouncing()



});




//todo app
//table in vanilla js with add edit and delete functionality
//