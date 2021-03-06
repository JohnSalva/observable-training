import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function GetXHR(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (evt) => {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr.responseText);
          }
        });
        xhr.addEventListener('error', (evt) => {
          reject(xhr.responseText);
        });
        xhr.open('GET', url, true);
        xhr.send();
      });
    }

    const btn1 = document.querySelector('#test_xhr') as HTMLButtonElement;
    const pre1 = document.querySelector('#xhr_result');
    btn1.addEventListener('click', (e) => {
      btn1.disabled = true;
      pre1.textContent = 'PROCESSING ...';
      GetXHR('https://cs8.scorpion.co/oauth/test')
        .then((data: string) => {
          btn1.disabled = false;
          pre1.textContent = data;
        });
    });

  }
}
