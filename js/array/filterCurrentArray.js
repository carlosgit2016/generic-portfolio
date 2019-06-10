/**
 * Filter the current array and return removed elements
 */
Array.prototype.filterCurrentArray = function (callback,...args){
	let removedElements = [];
	for(let i = 0; i < this.length ; i++){
		if(!callback(this[i],i,this)) {
			removedElements.push(...this.splice(i,i++));
		};
	}
	return removedElements;
}