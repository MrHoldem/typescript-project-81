import {describe, expect, test, it} from 'vitest';
import Tag from "../Tags";

describe("Tag", () => {
    it ("<br>", () => {
        expect(new Tag("br").toString()).toBe("<br>");
    });

    it ("<img>", () => {
        expect(new Tag("img", {src: "path/to/image"}).toString()).toBe(`<img src="path/to/image">`);
    });

    it ("input", () => {
        expect(new Tag("input", {type: "submit", value: "Save"}).toString()).toBe(`<input type="submit" value="Save">`);
    });

    it ("label", () => {
        expect(new Tag("label", {}, "Email").toString()).toBe(`<label>Email</label>`);
    });

    it ("label with attribute", () => {
        expect(new Tag("label", {for: "email"}, "Email").toString()).toBe(`<label for="email">Email</label>`);
    });

    it ("div", () => {
        expect(new Tag("div").toString()).toBe(`<div></div>`);
    });

    it("form", () => {
        expect(new Tag("form").toString()).toBe(`<form></form>`);
    });
});