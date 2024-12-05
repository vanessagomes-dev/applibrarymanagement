import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

 // Método para buscar todos os autores
 getAuthors(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

// Método para criar um novo autor
addAuthor(author: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, author);
}
}
