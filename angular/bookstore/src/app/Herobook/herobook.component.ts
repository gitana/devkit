import { Component, Input } from '@angular/core';

import { Book } from '../book';

@Component({
    selector: 'app-herobook',
    templateUrl: './herobook.component.html'
})
export class HeroBookComponent {

    @Input()
    book: Book;

    constructor() { }

}
