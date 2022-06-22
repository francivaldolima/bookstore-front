import { Book } from './../model/Book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tem',
  templateUrl: './product-tem.component.html',
  styleUrls: ['./product-tem.component.css']
})
export class ProductTemComponent implements OnInit {

  @Input()
  livro!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
