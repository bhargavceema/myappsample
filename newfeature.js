export default function newFeature(name){
	return name.split('')
	.map(word => '${word.charAt(0).toUpperCase()}.')
	.join('');
} 