import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface Pages {
  title: string;
  snippet: string;
  pageid: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: Pages[] = [];
  constructor(private wikipediaService: WikipediaService) {}

  onTerm(term: string) {
    if (term) {
      this.wikipediaService.search(term).subscribe((pages) => {
        this.pages = pages;
      });
    }
  }
}
