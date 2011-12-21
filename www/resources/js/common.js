function toDecimal(x) { 
	var f = parseFloat(x); 
	if (isNaN(f)) { 
		return; 
	} 
	f = Math.round(x*100)/100; 
	return f; 
} 

function isEmpty(obj){
	if(typeof(obj) !== 'undefined' || obj){
		return false;
	} else {
		return true;
	}
}