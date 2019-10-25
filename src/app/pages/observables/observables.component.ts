import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, from, Subscription, VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor() { }

  ngOnInit() {
    const btn1 = document.querySelector('#click_me1');
    let count1 = 0;
    const obs1 = fromEvent(btn1, 'click');
    const sub1 = obs1.subscribe((e) => {
      btn1.textContent = `CLICKED ${++count1} TIMES`;
    });
    this.subs.push(sub1);

    const btn2 = document.querySelector('#click_me2') as HTMLButtonElement;
    let count2 = 0;
    const obs2 = fromEvent(btn2, 'click');
    const sub2 = obs2.subscribe((e) => {
      btn2.textContent = `CLICKED ${++count2} TIMES`;
      sub2.unsubscribe();
      btn2.disabled = true;
    });
    this.subs.push(sub2);

    const obs3 = from([1, 2, 3, 4]);
    const btn3 = document.querySelector('#click_me3');
    const res3 = document.querySelector('#result3');
    btn3.addEventListener('click', (e) => {
      res3.textContent = 'OBSERVING';
      const onNext = (n) => {
        res3.textContent += '\n' + `OBSERVED: ${n}`;
      };
      const onError = (e) => {
        alert('ERROR');
      };
      const onComplete = () => {
        res3.textContent += '\nCOMPLETE';
      };
      obs3.subscribe(onNext, onError, onComplete);
    });

    const clear3 = document.querySelector('#clear3');
    clear3.addEventListener('click', (e) => {
      res3.textContent = '';
    });

  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

}
