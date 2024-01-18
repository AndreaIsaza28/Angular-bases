import { Component } from "@angular/core";

@Component ({
  selector: 'app-counter',
  template: `<h3 class="text-center">Counter: {{counter}} </h3>
  <div class="text-center">
  <button (click)="increaseBy(+1)" class="btn btn-success mx-2"> Aumentar </button>
  <button (click)="reset()" class="btn btn-warning mx-2"> Reset </button>
  <button (click)="increaseBy(-1)" class="btn btn-danger mx-2"> Disminuir </button>
  </div>`
})


export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }
}
