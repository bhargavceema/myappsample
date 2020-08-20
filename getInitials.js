function getIntitials(name){
	return name.split(' ')
	  .map(word => word.charAT(0))
	  .join(' ');
}