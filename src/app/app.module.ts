import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesDashboardComponent } from './component/movies-dashboard/movies-dashboard.component';
import { MoviesCardComponent } from './component/movies-card/movies-card.component';
import { MobileCardComponent } from './component/mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './component/mobile-dashboard/mobile-dashboard.component';
import { CardDashboardComponent } from './component/card-dashboard/card-dashboard.component';
import { CardCardComponent } from './component/card-card/card-card.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    MoviesDashboardComponent,
    MoviesCardComponent,
    MobileCardComponent,
    MobileDashboardComponent,
    CardDashboardComponent,
    CardCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
