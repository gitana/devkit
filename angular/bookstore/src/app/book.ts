export class Book {
    _doc: string;
    id: string;
    name: string;
    title: string;
    imageUrl:string;
    description:string;
    summary:string;
    authorTitle:string;
    tags:Array<string>;
    recommendations:Array<Book>;

    constructor(name: string, id: string, title:string, authorTitle:string, description:string, summary:string, tags:Array<string>, recommendations:Array<Book>) {
        this.name = name;
        this._doc = this.id = id;
        this.title = title;
        this.authorTitle = authorTitle;
        this.description = description;
        this.summary = summary;
        this.tags = tags;
        this.recommendations = recommendations;
    }
}
