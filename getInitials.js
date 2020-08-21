// " for your information" -> "FYI"

export default  function getIntitials(name){
	return name.split(' ')
	  .map(word => word.charAt(0).toUpperCase())
	  .join(' ');

}