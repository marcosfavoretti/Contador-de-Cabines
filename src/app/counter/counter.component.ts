import { Component } from '@angular/core';
import { GetCouterService } from '../services/get-couter.service';
import { TimerApiCallService } from '../services/timer-api-call.service';
import { ICounter } from './ICounter';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { transitionAnimation } from './animations/animation';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  animations: [trigger('openClose', [

    transition('false => true', [
      useAnimation(transitionAnimation, {
        params: {
          time: '2s'
        }
      })
    ])
  ])]
})


export class CounterComponent {
  valueChangedFlags: boolean[] = []; // Array de flags para controlar a animação de cada item

  constructor(private api: GetCouterService, private timer: TimerApiCallService, private contador: CounterService) { }
  counter: ICounter = {
    a_count: ['-', '-', '-', '-', '-', '-'],
    n_count: 0
  }
  estado: string = "open"


  private numberInArray(value: number) {
    const arrayValue = value.toString().split('').map(String)
    return this.putDot(arrayValue)
  }

  private putDot(number_array: string[]) {
    const dot_index = (number_array.length - 3)  //menos pq começa do 0 o indice
    if (dot_index > 0) {
      number_array.splice(dot_index, 0, '.')
    }
    return number_array
  }

  async ngOnInit() {
    this.api.counter_Subject.subscribe((value) => this.valuesChanged(value))
    await this.api.getCounter()
    this.timer.applyTimer()
  }

  valuesChanged(value: number) {
    if (!this.counter?.a_count) {
      this.counter.a_count = this.numberInArray(value);
      this.valueChangedFlags = Array(this.counter.a_count.length).fill(false); // Inicializa todas as flags como false
    }
    const oldValue = [...this.counter.a_count];
    const changedValue = this.contador.compare(this.counter.a_count, this.numberInArray(value));
    if (!this.contador.isEqual(this.counter.a_count, oldValue)) {
      this.counter.n_count = value;
      if (!oldValue.length) return;
      this.valueChangedFlags = Array(this.counter.a_count.length).fill(true); // Define a flag como true para o item alterado
      console.log('mudou os valores');
      return;
    }
    this.valueChangedFlags = Array(this.counter.a_count.length).fill(false); // Define todas as flags como false quando não há mudança
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
