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
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    //clears data
    output.html("");


    
    var newData = tableData
    //replaces value
    if (datetime !== "") {
        newData = newData.filter(ufodata => ufodata.datetime === datetime);
    }
    if (city !== "") {
        newData = newData.filter(ufodata => ufodata.city=== city); 
    }
    if (state !== "") {
        newData = newData.filter(ufodata => ufodata.state=== state); 
    }
    if (country !== "") {
        newData = newData.filter(ufodata => ufodata.country=== country); 
    }
    if (shape !== "") {
        newData = newData.filter(ufodata => ufodata.shape=== shape); 
    }

    newData.forEach((ufodata) => {
        var row = tbody.append("tr");
            Object.entries(ufodata).forEach(([key,value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });       
};

button.on("click", handleclick);

