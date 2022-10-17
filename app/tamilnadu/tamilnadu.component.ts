import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamilnadu',
  templateUrl: './tamilnadu.component.html',
  styleUrls: ['./tamilnadu.component.css']
})
export class TamilnaduComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchText : string='';
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
    console.log(this.searchText);
  }
courses=[
  {id:101,name:'Kodaikanal',author:'jhon heikela',duration:48,type:'free',
price:'0.00',ratings:3.5,image:'assests/images',description:'In this you will see the Places '}
]
}
