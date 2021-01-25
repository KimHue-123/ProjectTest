import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookCategory } from '../models/BookCategory';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.scss']
})
export class BookCategoryComponent implements OnInit {

  public listBookCategory:BookCategory[] = [];
  public dataCategory: MatTableDataSource<BookCategory>;
  displayedColumns: string[] = ['id', 'category', 'topic'];
  constructor(private httpService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadListCategoty();
  }

  addBookCategory(){

  }
  private loadListCategoty(){
        this.listBookCategory = [];
        this.httpService.getListLoaiSach().subscribe((data)=>{
            for(let i = 0; i < data.recordset.length; i++){
                let temp = new BookCategory();
                temp.id = data.recordset[i].MALOAISACH;
                temp.category = data.recordset[i].TENLOAISACH;
                temp.topic = data.recordset[i].CHUDE;
                this.listBookCategory.push(temp)
            }
            this.dataCategory = new MatTableDataSource(this.listBookCategory) ;
            
        });
        
    }
}
