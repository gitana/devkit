import { Component, Input } from "@angular/core";

import { Book } from '../book';

@Component({
    selector: 'app-book',
    templateUrl: './bookitem.component.html'
})
export class BookItemComponent  {
    @Input() width: string;
    @Input() height: string;
    @Input() book: Book;

};