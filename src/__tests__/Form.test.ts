import {test, describe, expect} from 'vitest';
import HtmlGenerator from '../HtmlGenerator';

describe("formFor", () => {
    const template = {name: "rob", job: "hexlet", gender: "m"};
    
    test("Base case", () => {
        expect(HtmlGenerator.formFor(template)).toBe(`<form action="#" method="post"></form>`);
    });

    test("Options", () => {
        expect(HtmlGenerator.formFor(template, {url: "/users", method : "post"})).toBe(`<form action="/users" method="post"></form>`);
    });

    test("With get method", () => {
        expect(HtmlGenerator.formFor(template, {url: "/users", method : "get"})).toBe(`<form action="/users" method="get"></form>`);
    });
});