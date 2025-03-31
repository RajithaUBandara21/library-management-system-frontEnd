import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})

// implement using on init 

export class ViewAllBooksComponent implements OnInit {


  private http ;
  public bookList: any = {};
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
    this.httpClient.get('http://localhost:8090/api/v1/book/get-all-book', { params }).subscribe((data) => {
      console.log(data);
    });
      // Handle the response data here
    }
     



}
