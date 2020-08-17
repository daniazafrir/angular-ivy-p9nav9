import { Component, OnInit } from '@angular/core';
import { User } from 'jsonp-lib';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userList:User[];
  isEditMode:boolean[] ;
  constructor( private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getUsers().subscribe(
        i=>{
        this.userList = i.slice(0,20);
        this.isEditMode = [];
        for (let index = 0; index < this.userList.length; index++) {
          this.isEditMode.push(false);
          
        }
      }, error=>{
        console.log(error)
      }
    );
 }

  editMode(index) {
    this.isEditMode[index] = !this.isEditMode[index];
  }

  updateUser(user,index) {
    this.ds.updateUsers(user);
    this.editMode(index)

  }

  deleteUser(user) {
    const index: number = this.userList.indexOf(user);
    if (index !== -1) {
        this.userList.splice(index, 1);
        this.ds.saveUsers(this.userList);
    }   
  }

}
