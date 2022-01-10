import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';

@Component({
    selector: 'app-authorlist',
    templateUrl: './authorlist.component.html'
})
export class AuthorlistComponent implements OnInit {

    authors;

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.getAuthors();
    }

    getAuthors(): void {
        this.bookService.getAuthors()
            .subscribe(authors => {
                    this.authors = Object.values(authors);
                    this.authors = this.authors.slice(0, Math.min(4, this.authors.length));
                }
            );
    }

}
