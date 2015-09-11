var thiser = require("./");

function testLength(field) {
	testLength.error = "The field length must be less than or equal to "+this.length;
	return field.length >= this.length;
}


function Cat (options){
	thiser(this, options, {age:0,sex:0}, [{field:"name", length:10, type:"string", tests:[thiser.tests.type, testLength]}, "parents"]);
};
Cat.prototype.greeting = function(){return "Hello, I am "+this.name+"!";};

var zosya = new Cat({name:"Zosya", age:7, parents:["Missy", "Jack"]});

console.log(zosya.parents);

var first = new Cat({name:1});