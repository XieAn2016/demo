let [a,b,c] = [1,2,3];
console.log(a,b,c);

[1,2,3].findIndex(function(item,index,array){
	item > 0 ? console.log(item) :console.log("");
});

