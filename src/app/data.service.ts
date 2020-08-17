import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { User,JsonpLibService } from 'jsonp-lib';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private js: JsonpLibService) { }

  initUsers():Observable<User[]> {
    localStorage.clear();
    return this.js.getUserList().pipe( map ((res:User[]) =>{      
        this.saveUsers(res);
        return res;        
    })
    );
  }
  saveUsers (users) {
    localStorage.setItem('users',JSON.stringify(users));
  }

  getUsers():Observable<User[]>{
    if(localStorage.getItem('users')!=null){
      return Observable.create((observer)=>{
        observer.next( JSON.parse(localStorage.getItem('users')));
           observer.complete();       
        });    
    }      
     else
      return this.initUsers();
  }
  getUser (id:number) {
    const users=localStorage.getItem('users');
    if(users!=null){      
      const user= JSON.parse(users).find(element => element.id ==id);
      return user;
    }
    return null;
  }

  updateUsers (user:User){
    const users=localStorage.getItem('users');
    if(users!=null){    
      const usersList=JSON.parse(users);
      const targetIdx = usersList.map(item => item.id).indexOf(user.id);
      usersList[targetIdx] = {...user};
      this.saveUsers(usersList);

    }
  }
}
