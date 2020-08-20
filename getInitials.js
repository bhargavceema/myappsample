// " for your information" -> "FYI"

function getIntitials(name){
	return name.split(' ')
	  .map(word => word.charAt(0).toUpperCase())
	  .join(' ');

}