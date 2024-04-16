import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  compare(old: string[], new_: string[]): string[] {
    const novoNumeroArray = this.updateArray(old, new_)
    return novoNumeroArray
  }

  private updateArray(old: string[], new_: string[]) {
    return new_.map((num, index) => num !== old[index] ? old[index] = num : old[index] = old[index])
  }

  isEqual(old: string[], new_: string[]) {
    return old.length === new_.length && old.every((val, index) => val === new_[index])
  }

}
