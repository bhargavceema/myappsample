// "just for your information" -> "JFYI"

function getIntitials(name){
	return name.split(' ')
	  .map(word => word.charAt(0).toUpperCase())
	  .join(' ');

}