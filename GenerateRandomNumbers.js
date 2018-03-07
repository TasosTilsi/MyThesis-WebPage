const DEFAULT_ARRAY_SIZE = 100;
const DEFAULT_NUMBERS_RANGE = 100;
const ARRAY_COLUMN_WIDTH = 20;
const SNACKBAR_TIME_OUT = 3000;
const MAX_INPUT_LENGTH = 4;

var the_array;

function generateRandomNumbers(arraySize, numbersRange) {
    var generatedNumbers = [];
    for (var i = 0; i < arraySize; i++) {
        generatedNumbers[i] = Math.floor(Math.random() * numbersRange);
    }
    return sortArray(generatedNumbers);
}

function displayArray() {
    //var the_array;
    var array_size = document.getElementById("arraySize").value;
    if (parseInt(array_size) == 0) {
        showSnackBar("You can not generate numbers with 0 array size!!!");
    }
    array_size = array_size == "" ? DEFAULT_ARRAY_SIZE : Math.abs(parseInt(array_size));
    var numbers_range = document.getElementById("numbersRange").value;
    numbers_range = numbers_range == "" ? DEFAULT_NUMBERS_RANGE : Math.abs(parseInt(numbers_range));
    the_array = generateRandomNumbers(array_size, numbers_range);
    draw(the_array, array_size);
    return 0;
}

function draw(new_array, array_size) {
    var table_container = document.getElementById("table_container");
    table_container.innerHTML = "";

    for (var i = 0; i < array_size / ARRAY_COLUMN_WIDTH; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        for (var k = 0; k < ARRAY_COLUMN_WIDTH; k++) {
            var col = document.createElement("div");
            col.setAttribute("class", "col-sm with-number");
            var value_p = document.createElement("div");
            value_p.setAttribute("class", "value");
            var text = document.createTextNode(new_array[k + i * ARRAY_COLUMN_WIDTH]); //"value: "+
            value_p.appendChild(text);
            if (k + i * ARRAY_COLUMN_WIDTH < array_size) {
                col.setAttribute("cell_id", (k + i * ARRAY_COLUMN_WIDTH).toString());
                col.setAttribute("cell_value", (new_array[k + i * ARRAY_COLUMN_WIDTH]).toString());
                var hr = document.createElement("hr");
                var index_p = document.createElement("div");
                index_p.setAttribute("class", "index");
                var index = document.createTextNode((k + i * ARRAY_COLUMN_WIDTH).toString()); //"index: "+
                index_p.appendChild(index);
                col.appendChild(index_p);
                col.appendChild(hr);
                col.appendChild(value_p);
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

function showSnackBar(message) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message;
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, SNACKBAR_TIME_OUT);
}

function onlyNumbersOnInput() {
    if (isNumber(parseInt(this.value))) {
        if (this.value.length > MAX_INPUT_LENGTH) {
            this.value = this.value.slice(0, MAX_INPUT_LENGTH);
        }
    } else {
        this.value = this.value.slice(0, 0);
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function sortArray(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return sortArray(left).concat(pivot, sortArray(right));
};

document.getElementById("generateNumbers").addEventListener("click", displayArray);
document.getElementById("arraySize").addEventListener("input", onlyNumbersOnInput);
document.getElementById("numbersRange").addEventListener("input", onlyNumbersOnInput);
document.getElementById("searchingNumber").addEventListener("input", onlyNumbersOnInput);
//setInterval(function(){alert("adding listener"); document.body.addEventListener("click", myAlert);}, 2000)
