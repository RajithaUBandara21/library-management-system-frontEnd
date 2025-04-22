
import { Component, OnInit } from '@angular/core';
import { BookResponse } from '../../model/getAllbookResponce';
import { Book } from '../../model/book.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})

// implement using on init 

export class ViewAllBooksComponent implements OnInit {


  private http ;
  public bookList: Book [] = [];
  // Constructor to inject the HttpClient service
  // This service is used to make HTTP requests to the backend API
  constructor(private httpClient : HttpClient) {
    this.http = httpClient;
   }
//Override the ngOnInit method to perform any initialization logic
    // Initialization logic can go here
  ngOnInit(): void {
this.loadBooks();
  }

  loadBooks() {
    const params = { page: '0', size: '10' };
    this.httpClient.get<BookResponse>('http://localhost:8090/api/v1/book/get-all-book', { params }).subscribe(( bookResponce : BookResponse) => {
   
      this.bookList = bookResponce.data.books;
      console.log(this.bookList);
      console.log(bookResponce.data.itemCount);
      console.log(bookResponce.code);
      console.log(bookResponce.messaage);
    });
      // Handle the response data here
    }
     



}
