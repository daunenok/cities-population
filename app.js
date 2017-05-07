var count = 20;
var items = document.getElementById("items");
var search = document.getElementById("search");
var cities;

fetch("cities.json")
.then(function(data) { return data.json(); })
.then(function(data) { 
	cities = data;
	displayResults(count, "");
});

search.addEventListener("change", showResult);

function showResult() {
	var cityNum = (search.value == "") ? count : cities.length;
	displayResults(cityNum, search.value);
}

function displayResults(num, temp) {
	var item, markup, cityLc, stateLc, tempLc;
	items.innerHTML = "";

	for (var i = 0; i < num; i++) {
		cityLc = cities[i].city.toLowerCase();
		stateLc = cities[i].state.toLowerCase();
		tempLc = temp.toLowerCase();
		if (!(cityLc.includes(tempLc) || stateLc.includes(tempLc)))
			continue;

		item = document.createElement("div");
		item.setAttribute("class", "item");
		markup = cities[i].city + ", " + cities[i].state;
		markup += "<span>" + 
		          parseInt(cities[i].population).toLocaleString() + 
		          "</span>";
		item.innerHTML = markup;
		items.appendChild(item);
	}	
}

