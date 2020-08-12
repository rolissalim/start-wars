import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient,
  ) {

  }

  getPeoples(page) {
    const url = 'https://swapi.dev/api/people?page='+page;
    const get = this.http.get(url, {});
    return this.http.get<any>(url, {})
      .pipe(map(
        data => {
          return data;
        })
      );
  }
  getPeopleById(id) {
    const url = 'https://swapi.dev/api/people/'+id;
    const get = this.http.get(url, {});
    return this.http.get<any>(url, {})
      .pipe(map(
        data => {
          return data;
        })
      );
  }
}
