import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const btn1 = document.querySelector('#click_me1');
    let count1 = 0;
    const fn1 = (e) => {
      btn1.textContent = `CLICKED ${++count1} TIMES`;
    };
    btn1.addEventListener('click', fn1);

    const btn2 = document.querySelector('#click_me1');
    let count2 = 0;
    const fn2 = (e) => {
      btn2.textContent = `CLICKED ${++count2} TIMES`;
    };
    btn2.addEventListener('click', fn2);
    btn2.removeEventListener('click', fn2);

    const btn3 = document.querySelector('#click_me3');
    let count3 = 0;
    btn3.addEventListener(
      'click',
      (e) => {
        btn3.textContent = `CLICKED ${++count3} TIMES`;
      }
    );
    btn3.removeEventListener(
      'click',
      (e) => {
        btn3.textContent = `CLICKED ${++count3} TIMES`;
      }
    );

    function GetXHR(url, success, error?) {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', (evt) => {
        if (xhr.status === 200) {
          success(xhr.responseText);
        } else if (error) {
          error(xhr.responseText);
        }
      });
      xhr.addEventListener('error', (evt) => {
        if (error) {
          error(xhr.responseText);
        }
      });
      xhr.open('GET', url, true);
      xhr.send();
    }

    const btn4 = document.querySelector('#test_xhr') as HTMLButtonElement;
    const pre4 = document.querySelector('#xhr_result');
    btn4.addEventListener('click', (e) => {
      btn4.disabled = true;
      pre4.textContent = 'PROCESSSING ...';
      GetXHR('https://cs8.scorpion.co/oauth/test', (data) => {
        btn4.disabled = false;
        pre4.textContent = data;
      });
    });
  }

}
