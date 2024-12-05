import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 
}
