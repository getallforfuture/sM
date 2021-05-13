import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  counter = 0
  updatedAt?: number

  clear(): void {
    this.updatedAt = Date.now()
    this.counter = 0
  }

  decrease(): void {
    this.updatedAt = Date.now()
    this.counter--
  }

  increase(): void {
    this.updatedAt = Date.now()
    this.counter++
  }
}
