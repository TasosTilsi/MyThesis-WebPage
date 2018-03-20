const DEFAULT_ARRAY_SIZE = 100;
const DEFAULT_NUMBERS_RANGE = 100;
const ARRAY_COLUMN_WIDTH = 20;
const SNACKBAR_TIME_OUT = 3000;
const MAX_INPUT_LENGTH = 4;

var the_array;
var generation_profile;

// Generate the numbers

function generateRandomNumbers(arraySize, numbersRange) {
    var generatedNumbers = [];
    for (var i = 0; i < arraySize; i++) {
        // Linear Random numbers
        var random_uniform = Math.random() * numbersRange;
        // do this to find the range you give in the input
        var random_with_profile = random_uniform;

        if (generation_profile == "exponential") {
            // Exponential Random numbers β = N^(x/N)
            random_with_profile = Math.pow(numbersRange, random_with_profile / numbersRange);
        }else if(generation_profile == "logarithmic"){
            // Logarithmic Random numbers β = N * log(x) / log(n)
            random_with_profile = Math.max(((numbersRange * Math.log(random_with_profile)) / Math.log(numbersRange)),0);
        }else if(generation_profile == "geometric"){
            // Geometric Random numbers
            random_with_profile = random_with_profile^2 / numbersRange;
        }else{
            //go with linear
        }

        generatedNumbers[i] = Math.floor(random_with_profile);
    }
    return sortArray(generatedNumbers);
}

// Run on click

function displayArray() {
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

// Drawing the table in the body

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
}

// QuickSort the Array

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

document.getElementById("generateNumbers").addEventListener("click", () => { generation_profile = "linear"; displayArray() });
document.getElementById("exponential").addEventListener("click", () => { generation_profile = "exponential"; displayArray() });
document.getElementById("logarithmic").addEventListener("click", () => { generation_profile = "logarithmic"; displayArray() });
document.getElementById("geometric").addEventListener("click", () => { generation_profile = "geometric"; displayArray() });