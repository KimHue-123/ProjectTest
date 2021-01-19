import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public arrPosts: any;
  public name ='';
  public id = 2;
  public title = '';
  public author = '';
  public nameNew ='';
  constructor(private common: CommonService, private httpService: AdminService) { 
    
  }

  ngOnInit(): void {
    this.httpService.getProfile().subscribe((data)=>{
      console.log(data);
      this.name = data.name;
    });

    this.httpService.getPots().subscribe((data)=>{
      console.log(data);

      this.id = data[0].id;
      this.title = data[0].title;
      this.author = data[0].author;
      
      this.arrPosts = data;
      console.log('arrPosts', this.arrPosts[0].id);
    })
  }

  public PostProfile(){
    const newData = {
      title: "json-server",
      author: "typicode"
    };
    this.httpService.postProfile(newData).subscribe((data)=>{
      console.log(data);
      this.nameNew = data;
      this.arrPosts.push(data);
    })
  }
}
