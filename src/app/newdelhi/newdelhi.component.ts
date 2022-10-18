import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-newdelhi',
  templateUrl: './newdelhi.component.html',
  styleUrls: ['./newdelhi.component.css']
})
export class NewdelhiComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

 value:number=8000;

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
