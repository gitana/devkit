import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
    selector: 'app-bookcarousel',
    templateUrl: './bookcarousel.component.html'
})
export class BookcarouselComponent implements OnInit {

    @Input()
    books;

    constructor(private bookService: BookService) { }

    ngOnInit() {
        if (!this.books)
        {
            this.getBooks();
        }
    }

    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                    this.books = Object.values(books);
                    this.books = this.books.slice(0, Math.min(4, this.books.length));
                }
            );
    }

}
