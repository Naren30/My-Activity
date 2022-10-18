import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ladakh',
  templateUrl: './ladakh.component.html',
  styleUrls: ['./ladakh.component.css']
})
export class LadakhComponent implements OnInit {

  constructor() { }
  value:number=20000;
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
