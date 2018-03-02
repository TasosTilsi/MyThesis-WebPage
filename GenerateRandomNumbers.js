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
    array_size = array_size == "" ? DEFAULT_ARRAY_SIZE : parseInt(array_size);
    var numbers_range = document.getElementById("numbersRange").value;
    numbers_range = numbers_range == "" ? DEFAULT_NUMBERS_RANGE : parseInt(numbers_range);
    new_array = generateRandomNumbers(array_size, numbers_range);
    draw(new_array, array_size, numbers_range);
    return 0;
}

function draw(new_array, array_size, numbers_range) {
    var numbers_container = document.getElementById("numbers_container");
    /*numbers_container.innerHTML = new_array;*/
    var table_container = document.getElementById("table_container");


    /*for (var i = 0; i < array_size; i += 10) {
        var rowa = $("<div>");
        rowa.addClass();
    }*/


    for (var i = 0; i < array_size; i += 10) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        var col1 = document.createElement("div");
        col1.setAttribute("class", "col-sm");
        var text = document.createTextNode(new_array[i]);
        col1.appendChild(text);
        row.appendChild(col1);
        var col2 = document.createElement("div");
        col2.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 1]);
        col2.appendChild(text);
        row.appendChild(col2);
        var col3 = document.createElement("div");
        col3.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 2]);
        col3.appendChild(text);
        row.appendChild(col3);
        var col4 = document.createElement("div");
        col4.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 3]);
        col4.appendChild(text);
        row.appendChild(col4);
        var col5 = document.createElement("div");
        col5.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 4]);
        col5.appendChild(text);
        row.appendChild(col5);
        var col6 = document.createElement("div");
        col6.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 5]);
        col6.appendChild(text);
        row.appendChild(col6);
        var col7 = document.createElement("div");
        col7.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 6]);
        col7.appendChild(text);
        row.appendChild(col7);
        var col8 = document.createElement("div");
        col8.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 7]);
        col8.appendChild(text);
        row.appendChild(col8);
        var col9 = document.createElement("div");
        col9.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 8]);
        col9.appendChild(text);
        row.appendChild(col9);
        var col10 = document.createElement("div");
        col10.setAttribute("class", "col-sm");
        text = document.createTextNode(new_array[i + 9]);
        col10.appendChild(text);
        row.appendChild(col10);
        table_container.appendChild(row);
    }
    //table_container.appendChild(row);
    console.log(new_array.length);
}

document.getElementById("generateNumbers").addEventListener("click", displayArray);

//setInterval(function(){alert("adding listener"); document.body.addEventListener("click", myAlert);}, 2000)
