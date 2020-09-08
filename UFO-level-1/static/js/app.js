// from data.js
var tableData = data;

// YOUR CODE HERE!
// declare variables
var tbody = d3.select("tbody");
var output = d3.select (".output");
var button = d3.select("#filter-btn")

// append all data into a table
tableData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// handles changes to the filter
function handleclick() {
    var datetime = d3.select("#datetime").property("value");
    //clears data
    output.html("");
    
    var newData = tableData.filter(ufodata => ufodata.datetime === datetime);
    //replaces value
    newData.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}

button.on("click", handleclick);

