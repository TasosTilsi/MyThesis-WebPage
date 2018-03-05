const DEFAULT_ARRAY_SIZE = 100;
const DEFAULT_NUMBERS_RANGE = 100;
const ARRAY_COLUMN_WIDTH = 10;
const SNACKBAR_TIME_OUT = 3000;

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
	if(parseInt(array_size) == 0 ){
		showSnackBar();
	}
    array_size = array_size == "" ? DEFAULT_ARRAY_SIZE : parseInt(array_size);
    var numbers_range = document.getElementById("numbersRange").value;
    numbers_range = numbers_range == "" ? DEFAULT_NUMBERS_RANGE : parseInt(numbers_range);
    new_array = generateRandomNumbers(array_size, numbers_range);
    draw(new_array, array_size);
    return 0;
}

function draw(new_array, array_size) {
    var numbers_container = document.getElementById("numbers_container");
    var table_container = document.getElementById("table_container");
	table_container.innerHTML = "";

    for (var i = 0; i < array_size / ARRAY_COLUMN_WIDTH; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        for (var k = 0; k < ARRAY_COLUMN_WIDTH; k++) {
            var col = document.createElement("div");
            col.setAttribute("class", "col-sm with-number");
            var text = document.createTextNode(new_array[k+i*10]);
            if(k+i*10 < array_size) {
				col.appendChild(text);
            	row.appendChild(col);
            	table_container.appendChild(row);
			} else {
				col.setAttribute("class", "col-sm");
				col.appendChild(document.createTextNode(""));
            	row.appendChild(col);
            	table_container.appendChild(row);
			}
        }
    }
    console.log(new_array.length);
}

function showSnackBar(){
	var x = document.getElementById("snackbar");
    x.className = "show";
	x.innerHTML = "You can not generate numbers with 0 array size!!!";
    setTimeout(()=>{ x.className = x.className.replace("show", ""); }, SNACKBAR_TIME_OUT);
}

document.getElementById("generateNumbers").addEventListener("click",displayArray);

//setInterval(function(){alert("adding listener"); document.body.addEventListener("click", myAlert);}, 2000)
