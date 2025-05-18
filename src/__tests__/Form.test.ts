import { test, describe, expect } from "vitest";
import HtmlGenerator, { IFormBuilder } from "../HtmlGenerator";

describe("formFor", () => {
  const template = { name: "rob", job: "hexlet", gender: "m" };

  test("Base case", () => {
    expect(HtmlGenerator.formFor(template)).toBe(
      `<form action="#" method="post"></form>`
    );
  });

  test("Options", () => {
    expect(
      HtmlGenerator.formFor(template, { url: "/users", method: "post" })
    ).toBe(`<form action="/users" method="post"></form>`);
  });

  test("With get method", () => {
    expect(
      HtmlGenerator.formFor(template, { url: "/users", method: "get" })
    ).toBe(`<form action="/users" method="get"></form>`);
  });

  describe("Callback", () => {
    test("Template and textarea", () => {
      expect(
        HtmlGenerator.formFor(template, { url: "#", method: "post" }, (f) => {
          f.input("name");
          f.input("job", { as: "textarea" });
        })
      ).toBe(
        `<form action="#" method="post"><label for="name">name</label><input name="name" type="text" value="rob"><label for="job">job</label><textarea name="job" rows="40" cols="20">hexlet</textarea></form>`
      );
    });

    test("Template and textarea", () => {
      expect(
        HtmlGenerator.formFor(template, { url: "#", method: "post" }, (f) => {
          f.input("name");
          f.input("job", { as: "textarea" });
        })
      ).toBe(
        `<form action="#" method="post"><label for="name">name</label><input name="name" type="text" value="rob"><label for="job">job</label><textarea name="job" rows="40" cols="20">hexlet</textarea></form>`
      );
    });

    test("Testing class attribute", () => {
      expect(
        HtmlGenerator.formFor(template, { url: "#", method: "post" }, (f) => {
          f.input("name", {class: 'user-input'});
          f.input("job");
        })
      ).toBe(
        `<form action="#" method="post"><label for="name">name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">job</label><input name="job" type="text" value="hexlet"></form>`
      );
    });

    test("Redefinition of default attributes", () => {
      expect(
        HtmlGenerator.formFor(template, { url: "#", method: "post" }, (f) => {
            f.input('job', { as: 'textarea', rows: '50', cols: '50'});
        })
      ).toBe(
        `<form action="#" method="post"><label for="job">job</label><textarea name="job" rows="50" cols="50">hexlet</textarea></form>`
      );
    });

    test("Testing error case", () => {
        expect(() => {
        HtmlGenerator.formFor(template, {url: "#", method: "post"}, (f) => {
            f.input("age");
        });}).toThrow("Error: Field age does not exist in the template.");
    });
  });

  describe("Submit", () => {
    test("Default label", () => {
      expect(HtmlGenerator.formFor(template, {url: "#", method: "post"}, (f) => {
        f.input("name");
        f.input("job", {as: "textarea"});
        f.submit();
      })).toBe(`<form action="#" method="post"><label for="name">name</label><input name="name" type="text" value="rob"><label for="job">job</label><textarea name="job" rows="40" cols="20">hexlet</textarea><input type="submit" value="Save"></form>`);
    });
    test("Custom Label", () => {
      expect(HtmlGenerator.formFor(template, {url: "#", method: "post"}, (f) => {
        f.input("name");
        f.input("job", {as: "textarea"});
        f.submit("Wow");
      })).toBe(`<form action="#" method="post"><label for="name">name</label><input name="name" type="text" value="rob"><label for="job">job</label><textarea name="job" rows="40" cols="20">hexlet</textarea><input type="submit" value="Wow"></form>`);
    });
  });

});
