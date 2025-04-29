import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent implements OnInit {

  private http;
  public countryList: any[] = [];
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }
  ngOnInit(): void {
    this.getCountryDetails();
  }

  getCountryDetails(){
    this.httpClient.get('https://restcountries.com/v3.1/all').subscribe((response) => {
this.countryList = response as any[];
    
    });
  }
}
