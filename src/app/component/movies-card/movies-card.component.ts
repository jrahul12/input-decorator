import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from 'src/app/model/movie';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MoviesCardComponent implements OnInit {

  @Input() movie!:Imovie
  constructor() { }

  ngOnInit(): void {
  }

}
