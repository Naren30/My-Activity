import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kerla',
  templateUrl: './kerla.component.html',
  styleUrls: ['./kerla.component.css']
})
export class KerlaComponent implements OnInit {
  value:number=12000;
  constructor() { }

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
