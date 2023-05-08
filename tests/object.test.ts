const whichtype = require("../dist");



test("isHttp", () => {
	const { isHttp } = whichtype;

	expect(isHttp("http://foo.com")).toBe(true);
	expect(isHttp("https://foo.com")).toBe(false);
});
