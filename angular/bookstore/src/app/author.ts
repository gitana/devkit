export class Author {
    id: string;
    name: string;
    title: string;
    imageUrl:string;
    description:string;
    summary:string;
    authorTitle:string;

    constructor(name: string, id: string, title:string, authorTitle:string, description:string, summary:string, imageUrl: string) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.authorTitle = authorTitle;
        this.description = description;
        this.summary = summary;
        this.imageUrl = imageUrl;
    }
}
