

export function getHeight(element){		       
		element.style.display = 'table';
		var height = element.scrollHeight + 'px';
		element.style.display = '';
		return height;	  
}

export function getWidth(element){		       
		element.style.display = 'table';
		var width = element.scrollWidth + 'px';
		element.style.display = '';
		return width;
}

export function showBar(bar) {
	console.log(bar)
	bar.style.opacity = 1;
	bar.style.height = getHeight(bar)
	bar.style.marginTop = 12 +'px';

	console.log(bar.children)
    for (let link of bar.children) {
    	link.style.height = getHeight(link)
    }	

}

export function hideBar(bar) {
	console.log(bar)
	bar.style.opacity = 0;
	bar.style.height = 0;
	bar.style.marginTop = 0;
	for (let link of bar.children) {
    	link.style.height = 0
    }	
}




