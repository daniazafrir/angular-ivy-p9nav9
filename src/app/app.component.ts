import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'sar-app';
  constructor(private ds: DataService){}
  ngOnInit(): void {    
        this.ds.initUsers();
  }
  
}
