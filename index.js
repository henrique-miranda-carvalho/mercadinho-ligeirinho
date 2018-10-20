const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();

app.use(express.static(__dirname + "/public/"));

// Routes Function
app.get("/function/queryCategory/:category", function(req, res) {
	let db = new sqlite3.Database("./data/data.db");
	data = "";
	db.all("SELECT name, price, img FROM produtos WHERE category=\"" + req.params.category + "\"", (err, rows) => {
		if (err) {
			throw err;
		}
		rows.forEach((row) => {
			data += "<div class=\"col-4\">" +
						"<div class=\"card\">" +
							"<img class=\"card-img-top\" src=\"img/products/" + row.img + "\" height=\"348\">" +
							"<div class=\"card-body\">" +
								"<h5 class=\"card-title\">" + row.name + "</h5>" +
								"<p class=\"card-text\">R$ " + row.price + "</p>" +
								"<form class=\"form-inline\">" +
									"<input type=\"submit\" class=\"btn btn-success\" value=\"Comprar\">" +
									"<input type=\"number\" class=\"form-control ml-3\" placeholder=\"Quantity\" size=\"2\">" +
								"</form>" +
							"</div>" +
						"</div>" +
					"</div>"
		});
		res.send(data);
	});
});

app.get("/function/querySearch/:search", function(req, res) {
	console.log(req.params.search);
	let db = new sqlite3.Database("./data/data.db");
	data = "";
	db.all("SELECT name, price, img, category FROM produtos WHERE name LIKE \"%" + req.params.search + "%\"", (err, rows) => {
		if (err) {
			throw err;
		}
		rows.forEach((row) => {
			data += "<div class=\"col-4\">" +
						"<div class=\"card\">" +
							"<img class=\"card-img-top\" src=\"img/products/" + row.img + "\" height=\"348\">" +
							"<div class=\"card-body\">" +
								"<h5 class=\"card-title\">" + row.name + "</h5>" +
								"<p class=\"card-text\">R$ " + row.price + "</p>" +
								"<form class=\"form-inline\">" +
									"<input type=\"submit\" class=\"btn btn-success\" value=\"Comprar\">" +
									"<input type=\"number\" class=\"form-control ml-3\" placeholder=\"Quantity\" size=\"2\">" +
								"</form>" +
							"</div>" +
						"</div>" +
					"</div>"
		});
		res.send(data);
	});
});

// Routes Default
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/home.html");
});

app.get("/cams", function(req, res) {
	res.sendFile(__dirname + "/public/cams.html")
});

app.get("/search", function(req, res) {
	res.sendFile(__dirname + "/public/search.html")
});

app.listen(80);