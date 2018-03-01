const DEFAULT_ARRAY_SIZE = 100;
const DEFAULT_NUMBERS_RANGE = 100;

function generateRandomNumbers(size, range) {
    for (var i = 0; i < size; i++) {
        generatedNumbers[i] = Math.floor(Math.random() * range + 1);
    }
    console.log(size)
    return size;
}

function displayArray(generateRandomNumbers) {
    canvas = document.getElementById("canvas")
    var context = canvas.getContext("2d")
    context.font = "20px Georgia";
    console.log(generateRandomNumbers.length)
    for (var i = 0; i < generateRandomNumbers.length; i++) {
        console.log(generateRandomNumbers[i]);
        context.fillText(generateRandomNumbers[i], i * 30, 50); //Be smarter here to control where text displays

    }
}

if (document.getElementById("arraySize").length > 0 && document.getElementById("numbersRange").length > 0) {
    var new_array = Array(parseInt(document.getElementById("arraySize").value))
    new_array = generateRandomNumbers(parseInt(document.getElementById("arraySize").value), parseInt(document.getElementById("numbersRange").value))
} else if (document.getElementById("arraySize").length > 0) {
    var new_array = Array(parseInt(document.getElementById("arraySize").value))
    new_array = generateRandomNumbers(parseInt(document.getElementById("arraySize").value), DEFAULT_NUMBERS_RANGE)
} else if (document.getElementById("numbersRange").length > 0) {
    var new_array = Array(DEFAULT_ARRAY_SIZE)
    new_array = generateRandomNumbers(DEFAULT_ARRAY_SIZE, parseInt(document.getElementById("numbersRange").value))
} else {
    var new_array = Array(DEFAULT_ARRAY_SIZE)
    new_array = generateRandomNumbers(DEFAULT_ARRAY_SIZE, DEFAULT_NUMBERS_RANGE)
}

//document.getElementById("generateNumbers").addEventListener("click", displayArray(new_array));

function myAlert() {
    alert("test" + generateRandomNumbers)
}

document.getElementById("generateNumbers").innerHTML.addEventListener("click", myAlert());
