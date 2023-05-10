const urlfuncs = require("../dist/urls");



test("isHttp", () => {
	const { isHttp } = urlfuncs;

	expect(isHttp("http://foo.com")).toBe(true);
	expect(isHttp("https://foo.com")).toBe(false);
});

test("isHttps", () => {
	const { isHttps } = urlfuncs;

	expect(isHttps("https://foo.com")).toBe(true);
	expect(isHttps("http://foo.com")).toBe(false);
});

test("isURL", () => {
	const { isURL } = urlfuncs;

	expect(isURL("https://foo.com")).toBe(true);
	expect(isURL("http://foo.com")).toBe(true);
	expect(isURL("www.foo.com")).toBe(false);
});
