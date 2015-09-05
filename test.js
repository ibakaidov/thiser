var thiser = require("./");


function Cat (options){
	thiser(this, options, {age:0,sex:0}, ["name"]);
};
Cat.prototype.greeting = function(){return "Hello, I am "+this.name+"!"};

var zosya = new Cat({name:"Zosya", age:7});
console.log(zosya.greeting());
