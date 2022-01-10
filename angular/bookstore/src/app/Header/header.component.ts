import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

     constructor(private router: Router) { }

    search(term: string): void {
        this.router.navigate(['/search'], {
            queryParams: {
                text: term
            }
        });
    }
}
