import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => this.books = Object.values(books));
    }

}
