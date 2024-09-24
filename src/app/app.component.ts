import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeTransactionsComponent } from './liste-transactions/liste-transactions.component';
import { CommonModule } from '@angular/common';
import { HeureComponent } from './heure/heure.component';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ListeTransactionsComponent,
    HeureComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercice3';

  currentTime: Date = new Date();

  ngOnInit() {
    interval(1000).pipe( 
      map(() => new Date()) 
    ).subscribe(time => {
      this.currentTime = time;
    });
  }
}
