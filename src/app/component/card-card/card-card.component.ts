import { Component, Input, OnInit } from '@angular/core';
import { Icard } from 'src/app/model/card';

@Component({
  selector: 'app-card-card',
  templateUrl: './card-card.component.html',
  styleUrls: ['./card-card.component.scss']
})
export class CardCardComponent implements OnInit {

  @Input() card!:Icard
  constructor() { }

  ngOnInit(): void {
  }

}
