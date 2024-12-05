import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html', 
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(data => {
      this.books = data;  
    });
  }
}
