const DEFAULT_ARRAY_SIZE = 100;
const DEFAULT_NUMBERS_RANGE = 300;
const ARRAY_COLUMN_WIDTH = 20;

let the_array;
let generation_profile;
let array_size;
let numbers_range;

// Generate the numbers

function generateRandomNumbers(arraySize, numbersRange) {
    let generatedNumbers = [];

    for (var i = 0; i < arraySize; i++) {
        // Linear Random numbers
        // doing this to find the range you give in the input
        let random_with_profile = Math.floor(Math.random() * numbersRange);

        if (generation_profile === "exponential") {
            // Exponential Random numbers β = N^(x/N)
            random_with_profile = Math.pow(numbersRange, random_with_profile / numbersRange);
        } else if (generation_profile === "logarithmic") {
            // Logarithmic Random numbers β = N * log(x) / log(n)
            random_with_profile = Math.max(((numbersRange * Math.log(random_with_profile)) / Math.log(numbersRange)), 0);
        } else if (generation_profile === "geometric") {
            // Geometric Random numbers
            random_with_profile = random_with_profile ^ 2 / numbersRange;
        } else {
            //go with linear
            if (numbersRange >= arraySize) {
                return getUniqueNumber(arraySize, numbersRange);
            } else {
                //go with normal linear
            }
        }

        generatedNumbers[i] = Math.floor(random_with_profile);
    }
    return sortArray(generatedNumbers);
}

function getUniqueNumber(size, range) {
    let arr = [];
    while (arr.length < size) {
        let randomnumber = Math.floor(Math.random() * range) + 1;
        if (arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return (sortArray(arr));
}

// Runs on click

function displayArray() {
    // Getting the value from arraySize input
    array_size = document.getElementById("arraySize").value;
    // Checking if the value is zero
    if (parseInt(array_size) === 0) {
        // and throwing a message if it is
        showSnackBar("You can not generate numbers with 0 array size!!!");
    }
    // If array_size is null, get the default else get the absolute value from the input
    array_size = array_size === "" ? DEFAULT_ARRAY_SIZE : Math.abs(parseInt(array_size));
    // Getting the value from numbersRange input
    numbers_range = document.getElementById("numbersRange").value;
    // If numbers_range is null, get the default else get the absolute value from the input
    numbers_range = numbers_range === "" ? DEFAULT_NUMBERS_RANGE : Math.abs(parseInt(numbers_range));
    // Generate and return the array sorted
    the_array = generateRandomNumbers(array_size, numbers_range);
    // Draw the table in the html body
    draw(the_array, array_size);
    // Not necessary but I return zero
    return 0;
}

// Drawing the table in the body

function draw(new_array, array_size) {
    // Getting the div in the body to draw the array
    var table_container = document.getElementById("table_container");
    // Clearing the div for the new generation
    table_container.innerHTML = "";

    // For each row loop the below (array_size / ARRAY_COLUMN_WIDTH = how many rows)
    for (var i = 0; i < array_size / ARRAY_COLUMN_WIDTH; i++) {
        // Create one div for a row
        var row = document.createElement("div");
        // Set attribute for this div
        row.setAttribute("class", "row");
        // For each column loop the below
        for (var k = 0; k < ARRAY_COLUMN_WIDTH; k++) {
            // Create one div for a column
            var col = document.createElement("div");
            // Set attribute for this div
            col.setAttribute("class", "col-sm with-number");
            // Create another div to put the array value in it
            var value_p = document.createElement("div");
            // Setting attributes
            value_p.setAttribute("class", "value");
            // Putting the value as a text
            var text = document.createTextNode(new_array[k + i * ARRAY_COLUMN_WIDTH]); //"value: "+
            // Appending the value text in the value div
            value_p.appendChild(text);
            // I am doing this for better visualization
            if (k + i * ARRAY_COLUMN_WIDTH < array_size) {
                // Setting attributes for my easiness in each cell
                col.setAttribute("cell_id", (k + i * ARRAY_COLUMN_WIDTH).toString());
                col.setAttribute("cell_value", (new_array[k + i * ARRAY_COLUMN_WIDTH]).toString());
                // Creating a divider
                var hr = document.createElement("hr");
                // Creating another div for the array index
                var index_p = document.createElement("div");
                // Setting attributes
                index_p.setAttribute("class", "index");
                // Putting the index as a text
                var index = document.createTextNode((k + i * ARRAY_COLUMN_WIDTH).toString()); //"index: "+
                // Appending the index text in the index div
                index_p.appendChild(index);
                // Appending the index div at parent div which is the column (cell)
                col.appendChild(index_p);
                // After the array index append the divider
                col.appendChild(hr);
                // Then append the array value
                col.appendChild(value_p);
                // Append the cell in the row div
                row.appendChild(col);
                // Finally append the row div at the table div
                table_container.appendChild(row);
            } else {
                //if a cell doesn't have values run this code for good visualization in the page 
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
}

// Adding event listeners

document.getElementById("generateNumbers").addEventListener("click", () => {
    generation_profile = "linear";
    resetSearches();
    displayArray();
});
document.getElementById("exponential").addEventListener("click", () => {
    generation_profile = "exponential";
    resetSearches();
    displayArray();
});
document.getElementById("logarithmic").addEventListener("click", () => {
    generation_profile = "logarithmic";
    resetSearches();
    displayArray();
});
document.getElementById("geometric").addEventListener("click", () => {
    generation_profile = "geometric";
    resetSearches();
    displayArray();
});