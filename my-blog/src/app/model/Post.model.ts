// Modèle de Post 

export class Post {

    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;

    constructor(title:string ,
        content: string,
        loveIts: number,
        createdAt: Date)
        {
     
        this.title=title;
        this.content=content;
        this.loveIts=loveIts;
        this.createdAt=createdAt;

    }
}