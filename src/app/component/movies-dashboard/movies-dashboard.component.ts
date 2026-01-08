import { Component, OnInit } from '@angular/core';
import { movieData } from 'src/app/const/movie';
import { Imovie } from 'src/app/model/movie';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moviesArr: Imovie[] = movieData
  trackById(index: number, moviesArr: Imovie) {
    return moviesArr
  }
}
