var inside = require('point-in-polygon')
var csv = require('fast-csv');
var fs = require("fs");
var polygons = require('./polygons');

var csvStream = csv.createWriteStream({headers: true}),
  writableStream = fs.createWriteStream("my.csv");

writableStream.on("finish", function(){
  console.log("DONE!");
});

var dict = [];

/* checks for point in list of polygons and marks where it falls within */
for (var key in polygons.poly_dict){
  // key = location
  // poly_dict[key] = polygon
  for (var i = 0; i < polygons.spoint.length; i++){
    if(inside(polygons.spoint[i],  polygons.poly_dict[key])) {
      dict.push({
        co: polygons.spoint[i],
        ward: key
      });
    }
    //else {
      //console.log("kill yourself")
      /* take this out to avoid overwriting the dict */
      //dict.push({
        //co: spoint[i],
        //ward: "" /* must not write anything */
      //})
    //}
  };
};


var ws = fs.createWriteStream("my.csv");
csv
   .write(dict, {headers: true})
   .pipe(ws);

console.log("FUCKING DONE")
// revert ** new
