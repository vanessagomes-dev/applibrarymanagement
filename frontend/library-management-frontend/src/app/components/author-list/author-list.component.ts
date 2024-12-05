import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  imports: [CommonModule] 
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