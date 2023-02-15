// Class Inheritance

class Publication {
    constructor(title,author,pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            ${ this.pubDate }
        `);
    }
}

const bookPublication = new Publication('YDKJS', 'Kyle Simpson', new Date())

console.log(bookPublication)