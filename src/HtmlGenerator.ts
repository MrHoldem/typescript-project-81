import Tag, {Attributes} from "./Tag";

type FormTemplate = {
    [key: string] : string
}

type FormOptions = {
    "url" : `/${string}` | "#",
    "method" : "post" | "get"
}

type FormBuilderParams  = {
    [key: string] : string
} & {
    [key in "as"]? : "textarea"
}

export interface IFormBuilder {
    input(name: string, params?: FormBuilderParams) : void;
}

interface IInternFormBuilder extends IFormBuilder {   
    currentHtml: string;
}

type FormCallback = ((f: IFormBuilder) => void) | null;

export default class HtmlGenerator {
    static formFor(template: FormTemplate = {}, options: FormOptions = {url: "#", method: "post"}, callback : FormCallback = (f) => {}) : string {
        let f = this.getFormBuilder(template);
        callback!(f);
        return new Tag("form", {action: options.url, method: options.method}, f.currentHtml).toString();   
    }

    private static getFormBuilder(template: FormTemplate) : IInternFormBuilder {
        return {
            currentHtml : "",
            input(name: string, params?: FormBuilderParams) : void {
                if (!Object.keys(template).includes(name))
                    throw Error(`Error: Field ${name} does not exist in the template.`);
                
                if (params === null || params === undefined) {
                    this.currentHtml += new Tag("input", {name: name, type: "text", value: template[name]});
                    return;
                }

                const tagName : string = params["as"] === undefined ? "input" : params!["as"]!;

                switch (tagName) {
                    case "input":
                        this.currentHtml += new Tag(tagName, {name: name, type: "text", value: template[name], ...params}).toString();
                        break;
                    case "textarea":
                        params = Object.fromEntries(Object.entries(params!).filter((value) => {
                            return value[0] !== "as"; 
                        }));
                        if (!Object.keys(params!).includes("cols"))
                            params = {cols: '20', ...params};
                        if (!Object.keys(params!).includes("rows"))
                            params = {rows: '40', ...params};
                        
                        this.currentHtml += new Tag(tagName, {name: name, ...params}, template[name]).toString();
                        break;
                    default:
                        throw Error(`Erorr: Unsupported type ${tagName}`);
                }
            }
        };
    }

}
