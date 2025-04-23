import { Component, OnInit } from '@angular/core';
import { BookResponse } from '../../model/getAllbookResponce';
import { Book } from '../../model/book.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { StrandedResponse } from '../../model/starndedResponce';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css',
})
export class ViewAllBooksComponent implements OnInit {
  private http;
  public bookList: Book[] = [];
  public selectedBook: any;
  isbn: any;
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadBooks();
  }

  setSelectedBook(book: Book) {
    this.selectedBook = book;
  }

  loadBooks() {
    const params = { page: '0', size: '10' };
    this.httpClient
      .get<BookResponse>('http://localhost:8090/api/v1/book/get-all-book', {
        params,
      })
      .subscribe((bookResponce: BookResponse) => {
        this.bookList = bookResponce.data.books;
      });
    // Handle the response data here
  }

  editBook() {
    alert('edit book');
  }

  deleteBook() {
    const params = {isbn: this.selectedBook.isbn}
    this.http
      .delete('http://localhost:8090/api/v1/book/delete-book', { params })
      .subscribe((response) => {
        console.log("hisadsadadasdadasdsad" + response);
        this.loadBooks();
      });
  }
}
