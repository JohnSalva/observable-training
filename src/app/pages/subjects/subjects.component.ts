import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor() { }

  ngOnInit() {
    const subj = new Subject<number>();
    let counter = 0;
    setInterval(() => {
      subj.next(++counter);
    }, 1000);

    const btn1 = document.querySelector('#click_me1');
    const res1 = document.querySelector('#result1');
    let sub: Subscription;
    btn1.addEventListener('click', (e) => {
      res1.textContent = 'OBSERVING';
      const onNext = (n) => {
        res1.textContent += '\n' + `OBSERVED: ${n}`;
      };
      const onError = (e) => {
        alert('ERROR');
      };
      const onComplete = () => {
        res1.textContent += '\nCOMPLETE';
      };
      sub = subj.subscribe(onNext, onError, onComplete);
      this.subs.push(sub);
    });

    const clear1 = document.querySelector('#clear1');
    clear1.addEventListener('click', (e) => {
      sub.unsubscribe();
      res1.textContent += '\nSTOPPED';
    });

  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

}
