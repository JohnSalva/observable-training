import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, first } from 'rxjs/operators';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const obs1 = from([1, 2, 3, 4, 5]).pipe(filter(num => num % 2 === 0));
    const btn1 = document.querySelector('#click_me1');
    const res1 = document.querySelector('#result1');
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
      obs1.subscribe(onNext, onError, onComplete);
    });

    const clear1 = document.querySelector('#clear1');
    clear1.addEventListener('click', (e) => {
      res1.textContent = '';
    });

    const obs2 = from([1, 2, 3, 4, 5]).pipe(map(num => num * 2));
    const btn2 = document.querySelector('#click_me2');
    const res2 = document.querySelector('#result2');
    btn2.addEventListener('click', (e) => {
      res2.textContent = 'OBSERVING';
      const onNext = (n) => {
        res2.textContent += '\n' + `OBSERVED: ${n}`;
      };
      const onError = (e) => {
        alert('ERROR');
      };
      const onComplete = () => {
        res2.textContent += '\nCOMPLETE';
      };
      obs2.subscribe(onNext, onError, onComplete);
    });

    const clear2 = document.querySelector('#clear2');
    clear2.addEventListener('click', (e) => {
      res2.textContent = '';
    });

    const obs3 = from([1, 2, 3, 4, 5]).pipe(first());
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


}
