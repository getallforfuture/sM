import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from "./reducers/counter";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  counter = 0
  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0))
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(
    private store: Store
  ) {
  }

  clear()
    :
    void {
    this.store.dispatch(clear())
  }

  decrease()
    :
    void {
    this.store.dispatch(decrease())
  }

  increase()
    :
    void {
    this.store.dispatch(increase())
  }
}
