import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    results;
    tags;

    constructor(private bookService: BookService,
                private route: ActivatedRoute) {}

    getTags() {
        this.bookService.getTags().subscribe(tags => {
            this.tags = Object.values(tags);
        });
    }

    ngOnInit(): void {
        this.getTags();

        this.route.queryParams.subscribe(params => {
            const text = params["text"];
            const tag = params["tag"];
            
            if (tag)
            {
                this.bookService.getTagResults(tag)
                    .subscribe(results => {
                        this.results = Object.values(results);
                    });
            }
            else if (text)
            {
                this.bookService.getSearchResults(text)
                    .subscribe(results => {
                        this.results = Object.values(results);
                    });
            }
        });
    }
}
