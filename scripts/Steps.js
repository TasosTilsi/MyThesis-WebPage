function linearDrawSteps(index, value, nextIndex, nextValue) {

    // Getting the div in the body to draw the array
    let container = document.getElementById("dragable_container_step_content");
    // Clearing the div for the new generation
    container.innerHTML = "";

    let h4 = document.createElement("h4");
    let title = manual.LinearSearch.title;
    h4.innerHTML = title;
    container.appendChild(h4);

    // Create one div for a row
    let row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    let col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    /*col.style.backgroundColor = "orange";
    if (first_time_run_linear) {
        col.style.backgroundColor = "lightgreen";
    }*/
    // Create another div to put the array value in it
    let value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    let text = document.createTextNode(value); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    let hr = document.createElement("hr");
    // Creating another div for the array index
    let index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    let index_node = document.createTextNode(index); //"index: "+
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


    row = document.createElement("div");
    // Set attribute for this div
    row.setAttribute("class", "row");
    // Create one div for a column
    col = document.createElement("div");
    // Set attribute for this div
    col.setAttribute("class", "col-sm with-number");
    /*col.style.backgroundColor = "lightblue";*/
    // Create another div to put the array value in it
    value_p = document.createElement("div");
    // Setting attributes
    value_p.setAttribute("class", "value");
    // Putting the value as a text
    text = document.createTextNode(nextValue); //"value: "+
    // Appending the value text in the value div
    value_p.appendChild(text);
    // Creating a divider
    hr = document.createElement("hr");
    // Creating another div for the array index
    index_p = document.createElement("div");
    // Setting attributes
    index_p.setAttribute("class", "index");
    // Putting the index as a text
    index_node = document.createTextNode(nextIndex); //"index: "+
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
}

/*
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
        }*/