import Tag from "./Tags"

type FormTemplate = {
    [key: string] : string
}

type FormOptions = {
    "url" : `/${string}` | "#",
    "method" : "post" | "get"
}

type FormCallback = ((f: any) => {}) | null;

export default class HtmlGenerator {
    static formFor(template: FormTemplate = {}, options: FormOptions = {url: "#", method: "post"}, callback : FormCallback = null) : string {
        return new Tag("form", {action: options.url, method: options.method}).toString();
    }
}
