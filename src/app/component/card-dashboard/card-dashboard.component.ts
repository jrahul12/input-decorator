import { Component, OnInit } from '@angular/core';
import { postsData } from 'src/app/const/card';
import { Icard } from 'src/app/model/card';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardsArr:Icard[]=postsData

  trackById(index:number,cardsArr:Icard){
    return cardsArr.body
  }

}
