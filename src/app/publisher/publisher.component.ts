import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Publisher } from '../models/Publisher';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {

  public listPublisher:Publisher[] = [];
  public dataPublisher: MatTableDataSource<Publisher>;
  displayedColumns: string[] = ['id', 'name', 'address'];
  constructor(private httpService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadListPublisher();
  }

  private loadListPublisher(){
    this.listPublisher = [];
    this.httpService.getListNXB().subscribe((data)=>{
        for(let i = 0; i < data.recordset.length; i++){
            let temp = new Publisher();
            temp.id = data.recordset[i].MANXB;
            temp.name = data.recordset[i].TENNXB;
            temp.address = data.recordset[i].DIACHI;
            this.listPublisher.push(temp)
        }
        this.dataPublisher = new MatTableDataSource(this.listPublisher) ;
        
    });
    
  }
  addPublisher(){

  }
}
