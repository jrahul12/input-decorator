import { Component, OnInit } from '@angular/core';
import { mobileData } from 'src/app/const/mobile';
import { Imobile } from 'src/app/model/mobile';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileArr: Imobile[] = mobileData

  trackById(index: number, mobileArr: Imobile) {
    return mobileArr
  }


}
