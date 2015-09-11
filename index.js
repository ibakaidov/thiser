
/**
 * Move fields from defaults and options params to thisObj, if in options willn't required field, then thiser will throw error.
 * @param {object} thisObj The object to which the property will be assigned. Default: {}.
 * @param {object} options The object from which the property will be assigned. Default: {}.
 * @param {object} defaults The object from which the property will be assigned. Default: {}.
 * @param {array} required Options object will test and if in options willn't required field, then thiser will throw error. Default: [].
 * @return {object} thisObj
 */

function thiser (thisObj, options, defaults, required){
	if (required== null) required=[];
	if (defaults == null) defaults={};
	if (options == null)  options={};	
	if (thisObj == null)  thisObj={};	
	required.forEach(function(field){
		if ("object"=== typeof field){
			var tmp =field;
			field = tmp.field;
		}
		var err = new Error("Required field '"+field+"' doesn't pass.");
		if (options[field] === undefined) throw err;
		if (tmp != null){
			if (!Array.isArray(tmp.tests)){
				tmp.tests=[tmp.tests];
			}
			tmp.tests.forEach(function (test) {
				if (test.call(tmp, options[field])) throw new Error("Field '"+field+"' error: '"+test.error+"'.");
			});
		}
	});
	
	map(defaults, function(value, key){
		if (undefined === options[key]) thisObj[key] = value;
	});
	map(options, function(value, key){
		thisObj[key]=value;
	});
		
	return thisObj;	
};

thiser.tests={
	type: (function(){
		
	 function test (field) {
		test.error="Field should be "+this.type;
		return this.type !== typeof field;
	}
	return test;
	})()
};

function map (obj, iterator){
	var n ={};
	for (var key in obj){
		n[key] = iterator(obj[key], key);
	}
	return n;
}
module.exports = thiser;
