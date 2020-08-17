import { Component, OnInit, Input } from '@angular/core';
import { JsonpLibService,Photo } from 'jsonp-lib';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photoList:Photo[];
  @Input() numOfPhotos:number =20;

  constructor(private  js :JsonpLibService ) { }
  
  ngOnInit(): void {
    this.js.getPhotoList().subscribe(
      i=>{
      this.photoList= i.slice(0,this.numOfPhotos);
      }, error=>{
        console.log(error);      }
    
    );

  }

}
