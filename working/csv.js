var Papa = require('papaparse'); // npm install papaparse
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // npm install xmlhttprequest (install instructions: https://www.npmjs.com/package/xmlhttprequest)
var xhr = new XMLHttpRequest("https://firebasestorage.googleapis.com/v0/b/jian-yang-57bf8.appspot.com/o/normal.csv?alt=media&token=e3f6a983-51ef-454d-95cd-517006326c70");


// I don't know which is the best link to use from firebase
// download link
var csv_url = "https://firebasestorage.googleapis.com/v0/b/jian-yang-57bf8.appspot.com/o/normal.csv?alt=media&token=e3f6a983-51ef-454d-95cd-517006326c70"

Papa.parse("gs://jian-yang-57bf8.appspot.com/normal.csv"/* storage link */, {
	download: true,
	complete: function(results) {
		console.log(results);
	}
});
