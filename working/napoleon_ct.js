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

var poly_dict = {
  'Ward 1': polygons.one,
  'Ward 2': polygons.two,
  'Ward 3': polygons.three,
  'Ward 4': polygons.four,
  'Ward 5': polygons.five,
  'Ward 6': polygons.six,
  'Ward 7': polygons.seven,
  'Ward 8': polygons.eight,
  'Ward 9': polygons.nine,
  'Ward 10': polygons.ten,
  'Ward 11': polygons.eleven,
  'Ward 12': polygons.twelve,
  'Ward 63': polygons.sixtythree,
  'Ward 73': polygons.seventythree
}

/* checks for point in list of polygons and marks where it falls within */
for (var key in poly_dict){
  // key = location
  // poly_dict[key] = polygon
  for (var i = 0; i < polygons.spoint.length; i++){
    if(inside(polygons.spoint[i],  poly_dict[key])) {
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
