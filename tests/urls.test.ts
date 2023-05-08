const whichtype = require("../dist");



test("isHttp", () => {
	const { isHttp } = whichtype;

	expect(isHttp("http://foo.com")).toBe(true);
	expect(isHttp("https://foo.com")).toBe(false);
});

test("isHttps", () => {
	const { isHttps } = whichtype;

	expect(isHttps("https://foo.com")).toBe(true);
	expect(isHttps("http://foo.com")).toBe(false);
});

test("isURL", () => {
	const { isURL } = whichtype;

	expect(isURL("https://foo.com")).toBe(true);
	expect(isURL("http://foo.com")).toBe(true);
	expect(isURL("www.foo.com")).toBe(false);
});
