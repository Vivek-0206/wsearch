import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    const url = `https://en.wikipedia.org/w/api.php?`;
    return this.http
      .get<WikipediaResponse>(url, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          origin: '*',
          srsearch: term,
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
