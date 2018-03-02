const DEFAULT_ARRAY_SIZE = 100;
const DEFAULT_NUMBERS_RANGE = 100;

function generateRandomNumbers(arraySize, numbersRange) {
	var generatedNumbers = [];
	for (var i = 0; i < arraySize; i++) {
		generatedNumbers[i] = Math.floor(Math.random() * numbersRange + 1);
	}
	return generatedNumbers;
}

function displayArray() {
	var new_array;
	var array_size = document.getElementById("arraySize").value;
	array_size = array_size=="" ? DEFAULT_ARRAY_SIZE : parseInt(array_size);
	var numbers_range = document.getElementById("numbersRange").value;
	numbers_range = numbers_range=="" ? DEFAULT_NUMBERS_RANGE : parseInt(numbers_range);
	new_array = generateRandomNumbers(array_size, numbers_range);
	draw(new_array,array_size,numbers_range);
	return 0;
}

function draw(new_array,array_size,numbers_range){
	numbers_container = document.getElementById("numbers_container");
	numbers_container.innerHTML = new_array;
	table_container = document.getElementById("table_container");
	
	//var my_table = '<table class="table">';
	var my_table = document.createElement("div");
	my_table.setAttribute("class", "row");
	for(var i = 0; i<array_size;i++){
		var row = my_table.insertRow;
		for(var k = 0;k<10;k++){
			var col = row.insertCell;
			col.innerHTML = array_size[i];
		}

	}
	numbers_container.innerHTML = new_array;
	console.log(new_array.length);
}

document.getElementById("generateNumbers").addEventListener("click", displayArray);

//setInterval(function(){alert("adding listener"); document.body.addEventListener("click", myAlert);}, 2000)
