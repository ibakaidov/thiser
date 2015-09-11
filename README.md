Module for create constructors. Util move fields...

## Example

```js
	var thiser = require("thiser");


	function testLength(field) {
		testLength.error = "The field length must be less than or equal to "+this.length;
		return field.length >= this.length;
	}

	function Cat (options){
		thiser(this, options, {age:0,sex:0}, [{field:"name", length:10, type:"string", tests:[thiser.tests.type, testLength]}, "parents"]);
	};
	
	var zosya = new Cat({name:"Zosya", age:7, ["Missy", "Jack"]});
	console.log(zosya.sex, zosya.parents); // 0 ['Missy', 'Jack']
	var noname = new Cat({sex:1}); // throw error: "Required field 'name' doesn't pass."
	var first = new Cat({name:1}); // throw error: "Field 'name' error: 'Field should be string'". 
```

## API

## thiser(thisObj, options, defaults, required)

Move fields from defaults and options params to thisObj, if in options willn't required field, then thiser will throw error.

### Params:

* **object** *thisObj* The object to which the property will be assigned. Default: {}.
* **object** *options* The object from which the property will be assigned. Default: {}.
* **object** *defaults* The object from which the property will be assigned. Default: {}.
* **array** *required* Options object will test and if in options willn't required field, then thiser will throw error. Default: [].

### Return:

* **object** thisObj

