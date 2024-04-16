import { Injectable, OnInit } from '@angular/core';
import axioscli from '../counter/axios.client';
import { GetCouterService } from './get-couter.service';
@Injectable({
  providedIn: 'root'
})
export class TimerApiCallService {

  constructor(private getCabs: GetCouterService) { }

  applyTimer() {
    setInterval(async () => {
      await this.getCabs.getCounter().catch(() => { throw new Error('contador fora do ar') })
    }, 10000);
  }
}
