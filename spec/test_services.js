'use strict';

describe("Running the sample test", function() {
	var someVar = "abc";
	it("Checking variable", function() {
		expect(someVar).toEqual("abc");
	});
	it("Checking variable wrong value", function() {
		expect(someVar).not.toEqual("abc1");
	});	
});

