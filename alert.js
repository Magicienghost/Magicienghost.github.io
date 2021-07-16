window.alert = function(titre, message) {
	document.getElementById("alertPanel").innerHTML = "<span class=\"close\" onclick=\"closealert();\"></span><h2>" + titre + "</h2><div class=\"texte\">" + message + "</div>";
	document.getElementById('alertPanel').style.display='block';
	document.getElementById('overlay').style.display='block';
}
function closealert()
{
	document.getElementById('alertPanel').style.display='none';
	document.getElementById('overlay').style.display='none';
}
