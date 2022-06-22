import { Book } from './model/Book';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class BooksService{
  private url = 'https://localhost:44382/api/bookstore';

  httpOptions= {
    Headers: new HttpHeaders({'content-tye': 'application/json'})
  }

  constructor(private http: HttpClient){}

  getBook(){
    return this.http.get(this.url);
  }
}
