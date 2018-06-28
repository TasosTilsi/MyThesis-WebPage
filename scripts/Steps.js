let checks;

function linearDrawSteps(cell, nextCell, found, checks) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    h4.innerHTML = manual.LinearSearch.title;
    container.appendChild(h4);

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "orange";
    if (found) {
        col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode("arr[index]: " + cell.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode("index: " + cell.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[index+1]: " + nextCell.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("index+1: " + nextCell.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    let h6 = document.createElement("h6");
    h6.innerHTML = "Number of Checks: <strong>" + checks + "</strong>";
    container.appendChild(h6);
}

function binaryDrawSteps(first, last, mid, found, checks) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    h4.innerHTML = manual.BinarySearch.title;
    container.appendChild(h4);

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode("arr[left]: " + first.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode("left: " + first.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "orange";
    if (found) {
        col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[mid]: " + mid.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("mid: " + mid.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[right]: " + last.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("right: " + last.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    let h6 = document.createElement("h6");
    h6.innerHTML = "Number of Checks: <strong>" + checks + "</strong>";
    container.appendChild(h6);
}

function jumpDrawSteps(cell, stepCell, found, checks) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    h4.innerHTML = manual.JumpSearch.title;
    container.appendChild(h4);

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "orange";
    if (found) {
        col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode("arr[index]: " + cell.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode("index: " + cell.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[step]: " + stepCell.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("step: " + stepCell.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    let h6 = document.createElement("h6");
    h6.innerHTML = "Number of Checks: <strong>" + checks + "</strong>";
    container.appendChild(h6);
}

function interpolationDrawSteps(first, last, mid, found, checks) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    h4.innerHTML = manual.InterpolationSearch.title;
    container.appendChild(h4);

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode("arr[low]: " + first.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode("low: " + first.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "orange";
    if (found) {
        col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[pos]: " + mid.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("pos: " + mid.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[high]: " + last.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("high: " + last.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    let h6 = document.createElement("h6");
    h6.innerHTML = "Number of Checks: <strong>" + checks + "</strong>";
    container.appendChild(h6);
}

function exponentialDrawSteps(previous, step, first, last, mid, found) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    h4.innerHTML = manual.ExponentialSearch.title;
    container.appendChild(h4);

    //------------previous---------------------------------------------------------------------//

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "red";
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode("arr[pr.step]: " + previous.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode("previous step: " + previous.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    //------------step---------------------------------------------------------------------//

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "red";
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[step]: " + step.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("step: " + step.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    //------------binary---------------------------------------------------------------------//

    // Create one div for a row
    row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    if (found) {
        if (first.getAttribute("cell_value") === document.getElementById("searchingNumber").value)
            col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[first]: " + first.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("first: " + first.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "orange";
    if (found) {
        if (mid.getAttribute("cell_value") === document.getElementById("searchingNumber").value)
            col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[mid]: " + mid.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("mid: " + mid.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "lightblue";
    if (found) {
        if (last.getAttribute("cell_value") === document.getElementById("searchingNumber").value)
            col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[last]: " + last.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("last: " + last.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    let h6 = document.createElement("h6");
    h6.innerHTML = "Number of Checks: <strong>" + checks + "</strong>";
    container.appendChild(h6);
}

function fibonacciDrawSteps(fib1, fib2, fib, index, found, checks) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    h4.innerHTML = manual.FibonacciSearch.title;
    container.appendChild(h4);

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "red";
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode("arr[fib1]: " + fib1.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode("fib1: " + fib1.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "red";
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[fib2]: " + fib2.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("fib2: " + fib2.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    //container.appendChild(row);

    // Create one div for a row
    //row = document.createElement("div");
    // Set attribute for this div
    //row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "red";

    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[fib]: " + fib.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("fib: " + fib.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    //------------index---------------------------------------------------------------------//

    // Create one div for a row
    row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    col.style.backgroundColor = "orange";
    if (found) {
        //if(mid.getAttribute("cell_value")===document.getElementById("searchingNumber").value)
        col.style.backgroundColor = "lightgreen";
    }
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode("arr[index]: " + index.getAttribute("cell_value")); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode("index: " + index.getAttribute("cell_id")); //"index: "+
    // Appending the index text in the index div
    index_p.appendChild(index_node);
    // Appending the index div at parent div which is the column (cell)
    col.appendChild(index_p);
    // After the array index append the divider
    col.appendChild(hr);
    // Then append the array value
    col.appendChild(value_p);
    // Append the cell in the row div
    row.appendChild(col);
    // Finally append the row div at the table div
    container.appendChild(row);

    let h6 = document.createElement("h6");
    h6.innerHTML = "Number of Checks: <strong>" + checks + "</strong>";
    container.appendChild(h6);
}