$(function() {
	reloadCams();
});

function reloadCams() {
	$.get('/function/queryCategory/cam', function(data) {
		$("#cams").html(data);
	});
}