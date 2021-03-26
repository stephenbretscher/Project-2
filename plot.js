
//         "IMDb": "8.4",
//         "Rotten_Tomatoes": "96%",
//         "Title": "The Americans",
//         "No": "11"



// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("scores_array.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
  
    // Sort the data array using the greekSearchResults value
    // a/b elements are anything that can be compared
      // Should my result be positive or negative?
        // positive --> sorted higher (look it up)
  
    data.sort(function(a, b) {
      return parseFloat(b.No) - parseFloat(a.No);
    });
  
    // Reverse the array due to Plotly's defaults
    // data = data.reverse();
  
    // Trace1 for the Greek Data
    var trace1 = {
      x: data.map(row => row.No).slice(0,10),
      y: data.map(row => row.Title).slice(0,10),
      text: data.map(row => row.No),
      name: "Emmys",
      type: "bar",
      orientation: "h"
    };

    var trace2 = {
        x: data.map(row => row.Rotten_Tomatoes).slice(0,10),
        y: data.map(row => row.Title).slice(0,10),
        text: data.map(row => row.Rotten_Tomatoes),
        name: "Rotten Tomato Score",
        type: "bar",
        orientation: "h"
      };

      var trace3 = {
        x: data.map(row => row.IMDb).slice(0,10),
        y: data.map(row => row.Title).slice(0,10),
        text: data.map(row => row.IMDb),
        name: "IMDb Score",
        type: "bar",
        orientation: "h"
      };
  
    // data
    var chartData = [trace1, trace2, trace3];
  
    // Apply the group bar mode to the layout
     var layout = {
      title: "Emmy's Won by Rating",
      autosize: false,
      width: 1000,
      height: 1000,
      margin: {
        l: 150,
        r: 50,
        b: 50,
        t: 50,
        pad: 4
     
      }
     };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
  });