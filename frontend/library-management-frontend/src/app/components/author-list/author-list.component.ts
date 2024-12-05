import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: any[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(data => {
      this.authors = data;
    });
  }
}
