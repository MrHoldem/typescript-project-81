type Attributes = {
    [name: string] : string
}

export default class Tag {
    private static tagsTypes : Map<string, boolean> = new Map<string, boolean>([
        ["div", true],
        ["input", false],
        ["br", false],
        ["img", false],
        ["label", true],
        ["form", true],
    ]);

    constructor(private tagName: string, private attributes: Attributes = {}, private content : string | null = null) {
        if (this.content === null)
            this.content = "";
    }

    toString() : string {
        const tagType = Tag.tagsTypes.get(this.tagName);
        let result : string;
        result = `<${this.tagName}${this.attributesToString()}>`;

        if (tagType === false) // Игнорируем content, если тег одинарный.
            return result;
            
        if (tagType === true || this.content?.length)
            return result + this.content + `</${this.tagName}>`;

        return result;
    }

    private attributesToString() : string {
        if (!Object.entries(this.attributes).length)
            return "";
        return " " + Object.entries(this.attributes)
                .map((value: [string, string]) => `${value[0]}="${value[1]}"`)
                .join(" ");
    }
}