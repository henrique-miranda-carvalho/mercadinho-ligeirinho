$(function() {
	reloadSearch();
});

function reloadSearch() {
	var query = location.search.slice(1);
	var chaveValor = query.split("=");
	var chave = chaveValor[0];
	var valor = chaveValor[1];
	var palavras = valor.split("+");
	var palavra = "";
	palavra = palavras[0];
	palavras.forEach(function (parte) {
		if (parte != palavras[0]) {
			palavra += " " + parte;
		}
	});
	var key = "/function/querySearch/";
	key += palavra;
	$("#searchItem").html("Pesquisa por " + palavra + "...");
	$.get(key, function(data) {
		$("#search").html(data);
	});
}