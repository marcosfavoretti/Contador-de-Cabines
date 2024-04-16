import { Injectable } from '@angular/core';
import axioscli from '../counter/axios.client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCouterService {

  counter_Subject = new Subject<number>()
  counter = this.counter_Subject.asObservable()
  constructor() { }

  async getCounter() {
    const value = await axioscli.get('/count-cabs')
    this.counter_Subject.next(+value.data.cabs_count)
  }
}
