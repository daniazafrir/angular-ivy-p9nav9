import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'jsonp-lib';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList:User[];

  constructor(private  ds :DataService ) { }

  ngOnInit(): void {
    this.ds.getUsers().subscribe(
        i=>{
        this.userList = i.slice(0,10);
      }, error=>{
        console.log(error)
      }
    );    
  
 }

}
