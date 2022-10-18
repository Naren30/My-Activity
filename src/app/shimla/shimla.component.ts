import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shimla',
  templateUrl: './shimla.component.html',
  styleUrls: ['./shimla.component.css']
})
export class ShimlaComponent implements OnInit {

  constructor() { }
  value:number=15000;
  ngOnInit(): void {
  }
  increase(){
    this.value+=8000;
  }
  decrease(){
    if(this.value<=8000){}
    else{
      this.value-=8000;
    }
  }
}
