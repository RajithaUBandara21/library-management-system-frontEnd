import { Component, OnInit } from '@angular/core';
import { BookResponse } from '../../model/getAllbookResponce';
import { Book } from '../../model/book.model';
import { HttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { StrandedResponse } from '../../model/starndedResponce';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

const Base_URL = 'http://localhost:8090/api/v1/book/';
@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css',
})
export class ViewAllBooksComponent implements OnInit {
  private http;
  public bookList: Book[] = [];
  public selectedBook: any = {};
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
      .get<BookResponse>(Base_URL + 'get-all-book', {
        params,
      })
      .subscribe((bookResponce: BookResponse) => {
        this.bookList = bookResponce.data.books;
      });
    // Handle the response data here
  }

  deleteBook() {
    const params = { isbn: this.selectedBook.isbn };
    this.http
      .delete(Base_URL + 'delete-book', { params })
      .subscribe((response) => {
        this.loadBooks();
        Swal.fire({
          title: 'Dleted',
          text: '',
          icon: 'success',
        });
      });
  }

  editBook() {
    this.http
      .put(Base_URL + 'book-update', this.selectedBook)
      .subscribe((response) => {
        const res = response as StrandedResponse;
        console.log('message' + res.message);
        this.loadBooks();
        Swal.fire({
          title: 'Updated',
          text: '',
          icon: 'success',
        });
      });
  }
}
