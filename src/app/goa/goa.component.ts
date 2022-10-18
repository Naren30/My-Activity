import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goa',
  templateUrl: './goa.component.html',
  styleUrls: ['./goa.component.css']
})
export class GoaComponent implements OnInit {

  constructor() { }
  value:number=10000;
  ngOnInit(): void {
  }
  increase(){
    this.value+=10000;
  }
  decrease(){
    if(this.value<=10000){}
    else{
      this.value-=10000;
    }
  }
}
